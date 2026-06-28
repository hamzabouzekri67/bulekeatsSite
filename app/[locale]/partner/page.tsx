"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchTagsList, registerStore } from "./api/handler_signup";

interface RestaurantFormData {
  firstName: string;
  lastName: string;
  restaurantName: string;
  restaurantType: string;
  countryCode: string;
  stateCode: string;
  cityDistrict: string;
  phoneNumbers: string[];
}

interface RestaurantTypeData {
  _id: string;
  name: string;
  ar_name: string;
}

export default function PartnerPage() {
  const params = useParams();
  const locale = params?.locale as string;
  const isRtl = locale === "ar";

  const [formData, setFormData] = useState<RestaurantFormData>({
    firstName: "",
    lastName: "",
    restaurantName: "",
    restaurantType: "",
    countryCode: "", // هنا سيتم تخزين الرمز المختصر مثل DZ ليفك قفل الهاتف فوراً
    stateCode: "",
    cityDistrict: "",
    phoneNumbers: [""],
  });

  const [phoneErrors, setPhoneErrors] = useState<boolean[]>([false]);
  const [registreCommerce, setRegistreCommerce] = useState<File | null>(null);
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });

  const [restaurantTypes, setRestaurantTypes] = useState<RestaurantTypeData[]>(
    [],
  );
  const [dbCountries, setDbCountries] = useState<any[]>([]);
  const [availableRegions, setAvailableRegions] = useState<any[]>([]);
  const [loadingTypes, setLoadingTypes] = useState<boolean>(true);

  useEffect(() => {
    const fetchRestaurantTypes = async () => {
      try {
        const response = await fetchTagsList();
        if (response && response.status === true) {
          setRestaurantTypes(response.result.findData);
          setDbCountries(response.result.country || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingTypes(false);
      }
    };
    fetchRestaurantTypes();
  }, []);

  useEffect(() => {
    if (!formData.countryCode) {
      setAvailableRegions([]);
      return;
    }
    const selectedCountry = dbCountries.find(
      (c) => c.country_code === formData.countryCode,
    );
    if (selectedCountry && selectedCountry.regions) {
      setAvailableRegions(selectedCountry.regions);
    } else {
      setAvailableRegions([]);
    }
  }, [formData.countryCode, dbCountries]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    console.log("name");

    if (name === "countryCode") {
      // تحديث فوري لرمز الدولة وتصفير الهاتف لضمان ظهور الخانة وتفعيلها
      setFormData((prev) => ({
        ...prev,
        countryCode: value,
        stateCode: "",
        phoneNumbers: [""],
      }));
      setPhoneErrors([false]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validatePhoneByCountry = (phone: string, countryCode: string) => {
    const cleanPhone = phone.trim();
    if (!cleanPhone) return true;

    if (countryCode === "DZ") {
      const dzRegex = /^(0[567]\d{8}|02\d{7}|\+213[5672]\d{8})$/;
      return dzRegex.test(cleanPhone);
    }
    const generalRegex = /^\+?[0-9]{9,14}$/;
    return generalRegex.test(cleanPhone);
  };

  const handlePhoneChange = (index: number, value: string) => {
    const cleanValue = value.replace(/[^\d+]/g, "");
    const updatedPhones = [...formData.phoneNumbers];
    updatedPhones[index] = cleanValue;
    setFormData((prev) => ({ ...prev, phoneNumbers: updatedPhones }));

    const isValid = validatePhoneByCountry(cleanValue, formData.countryCode);
    const updatedErrors = [...phoneErrors];
    updatedErrors[index] = cleanValue.length > 0 ? !isValid : false;
    setPhoneErrors(updatedErrors);
  };

  const addPhoneField = () => {
    if (formData.phoneNumbers.length < 4) {
      setFormData((prev) => ({
        ...prev,
        phoneNumbers: [...prev.phoneNumbers, ""],
      }));
      setPhoneErrors((prev) => [...prev, false]);
    }
  };

  const removePhoneField = (index: number) => {
    if (formData.phoneNumbers.length > 1) {
      const updatedPhones = formData.phoneNumbers.filter((_, i) => i !== index);
      const updatedErrors = phoneErrors.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, phoneNumbers: updatedPhones }));
      setPhoneErrors(updatedErrors);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setRegistreCommerce(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    if (!formData.countryCode) {
      setStatus({
        loading: false,
        message:
          locale === "fr"
            ? "Veuillez d'abord sélectionner un pays."
            : "يرجى اختيار الدولة أولاً لتأكيد أرقام الهاتف.",
        error: true,
      });
      return;
    }

    if (phoneErrors.includes(true)) {
      setStatus({
        loading: false,
        message:
          locale === "fr"
            ? "Veuillez corriger les numéros de téléphone."
            : "يرجى تصحيح أرقام الهاتف غير الصحيحة.",
        error: true,
      });
      return;
    }

    if (!registreCommerce) {
      setStatus({
        loading: false,
        message:
          locale === "fr"
            ? "Veuillez télécharger le Registre du Commerce."
            : "يرجى رفع وثيقة السجل التجاري أولاً.",
        error: true,
      });
      return;
    }

    const validPhones = formData.phoneNumbers.filter(
      (phone) => phone.trim() !== "",
    );
    if (validPhones.length === 0) {
      setStatus({
        loading: false,
        message:
          locale === "fr"
            ? "Veuillez entrer au moins un numéro."
            : "يرجى إدخال رقم هاتف واحد على الأقل.",
        error: true,
      });
      return;
    }

    // ابحث عن الدولة مرة واحدة فقط
    const currentCountryObj = dbCountries.find(
      (c) => c.country_code === formData.countryCode,
    );
    const selectedCountry = currentCountryObj ? currentCountryObj.country : "";
    const selectedState = formData.stateCode;
    const dialCode = currentCountryObj?.dialling_code || "";

   // console.log(currentCountryObj);
    

    const formattedPhones = formData.phoneNumbers
      .filter((phone) => phone.trim() !== "")
      .map((phone) => {
        let cleanPhone = phone.trim();

        if (cleanPhone.startsWith("0")) {
          cleanPhone = cleanPhone.substring(1);
        }

        if (!cleanPhone.startsWith(dialCode)) {
          return `${dialCode}${cleanPhone}`.trim().replace("+","");
        }
        return cleanPhone;
      });

      console.log(JSON.stringify(formattedPhones));
      

    const dataToSend = new FormData();
    dataToSend.append("name", formData.firstName);
    dataToSend.append("phones", JSON.stringify(formattedPhones));
    dataToSend.append("namefamilly", formData.lastName);
    dataToSend.append("nameEtabliss", formData.restaurantName);
    dataToSend.append("typeEtabliss", formData.restaurantType);
    dataToSend.append("pays", selectedCountry);
    dataToSend.append("ville", selectedState);
    dataToSend.append("state", formData.cityDistrict);
    dataToSend.append("document", registreCommerce);

    try {
      const response = await registerStore(dataToSend);
      if (response.status == true) {
        setStatus({
          loading: false,
          message:
            locale === "fr" ? "Inscription réussie!" : "تم التسجيل بنجاح!",
          error: false,
        });
        setFormData({
          firstName: "",
          lastName: "",
          restaurantName: "",
          restaurantType: "",
          countryCode: "",
          stateCode: "",
          cityDistrict: "",
          phoneNumbers: [""],
        });
        setPhoneErrors([false]);
        setRegistreCommerce(null);
        const fileInput = document.getElementById(
          "registre_file",
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        const errorData = await response.json();
        setStatus({
          loading: false,
          message: errorData.message || "Error",
          error: true,
        });
      }
    } catch (error) {
      setStatus({ loading: false, message: "Server Error", error: true });
    }
  };

  const getPhoneErrorMessage = (countryCode: string, locale: string) => {
    const isAr = locale === "ar";

    switch (countryCode) {
      case "DZ":
        return isAr
          ? "رقم غير صحيح، يجب أن يتكون من 10 أرقام ويبدأ بـ 05، 06، 07 أو 02"
          : "Numéro invalide, doit contenir 10 chiffres et commencer par 05, 06, 07 ou 02";

      case "MA":
        return isAr
          ? "رقم مغربي غير صحيح، يجب أن يتكون من 10 أرقام ويبدأ بـ 05، 06 أو 07"
          : "Numéro marocain invalide (Ex: 06XXXXXXXX)";

      case "TN":
        return isAr
          ? "رقم تونسي غير صحيح، يجب أن يتكون من 8 أرقام"
          : "Numéro tunisien invalide (8 chiffres requis)";

      case "FR":
        return isAr
          ? "رقم فرنسي غير صحيح، يجب أن يتكون من 10 أرقام ويبدأ بـ 06 أو 07"
          : "Numéro français invalide (Ex: 06XXXXXXXX)";

      default:
        return isAr
          ? "صيغة الرقم غير صحيحة، يرجى إدخال رقم هاتف دولي معتمد"
          : "Format de numéro invalide pour ce pays";
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "60px auto",
        padding: "30px",
        direction: isRtl ? "rtl" : "ltr",
        fontFamily: "sans-serif",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {locale === "fr" ? "Devenir Partenaire" : "تسجيل شريك جديد"}
      </h2>

      <form onSubmit={handleSubmit}>
        {/* الاسم واللقب */}
        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          <div style={{ flex: 1 }}>
            <label>{locale === "fr" ? "Prénom" : "الاسم الأول"}:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                color: "#000",
                backgroundColor: "#fff",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>{locale === "fr" ? "Nom" : "اللقب"}:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                color: "#000",
                backgroundColor: "#fff",
              }}
            />
          </div>
        </div>

        {/* اسم المطعم */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            {locale === "fr" ? "Nom du Restaurant" : "اسم المطعم / الشركة"}:
          </label>
          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              color: "#000",
              backgroundColor: "#fff",
            }}
          />
        </div>

        {/* نوع النشاط */}
        <div style={{ marginBottom: "15px" }}>
          <label>{locale === "fr" ? "Type d'Entreprise" : "نوع الشركة"}:</label>
          <select
            name="restaurantType"
            value={formData.restaurantType}
            onChange={handleChange}
            disabled={loadingTypes}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              color: "#000",
              backgroundColor: "#fff",
            }}
          >
            <option value="">
              {loadingTypes
                ? "..."
                : locale === "fr"
                  ? "Choisir..."
                  : "اختر النوع..."}
            </option>
            {!loadingTypes &&
              restaurantTypes.map((type) => (
                <option
                  key={type._id}
                  value={locale === "ar" ? type.ar_name : type.name}
                >
                  {locale === "ar" ? type.ar_name : type.name}
                </option>
              ))}
          </select>
        </div>

        {/* حقل الدول (تأكد من أن الـ value تأخذ c.country_code) */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "500" }}>
            {locale === "fr" ? "Pays" : "الدولة"}:
          </label>
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "#000",
            }}
          >
            <option value="">
              {locale === "fr" ? "Sélectionner..." : "اختر الدولة..."}
            </option>
            {dbCountries.map((c) => (
              <option key={c.country_code} value={c.country_code}>
                {c.flag} {locale === "ar" ? c.ar_name : c.country}
              </option>
            ))}
          </select>
        </div>

        {/* حقل أرقام الهاتف - يفتح فوراً بمجرد اختيار الدولة */}
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ fontWeight: "500", display: "block", marginBottom: "5px" }}
          >
            {locale === "fr" ? "Numéros de téléphone" : "أرقام الهاتف"}:
          </label>

          {formData.phoneNumbers.map((phone, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="tel"
                  disabled={!formData.countryCode} // ينفتح الحقل بمجرد أن يحمل countryCode قيمة
                  placeholder={
                    !formData.countryCode
                      ? locale === "fr"
                        ? "Sélectionnez d'abord le pays"
                        : "اختر الدولة أولاً لتفعيل الحقل"
                      : formData.countryCode === "DZ"
                        ? "Ex: 05XXXXXXXX"
                        : "Ex: +33XXXXXXXX"
                  }
                  value={phone}
                  onChange={(e) => handlePhoneChange(index, e.target.value)}
                  required={index === 0}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "6px",
                    border: phoneErrors[index]
                      ? "1px solid #ef4444"
                      : "1px solid #ccc",
                    color: "#000000",
                    backgroundColor: !formData.countryCode
                      ? "#f3f4f6"
                      : "#ffffff", // يتغير الخلفية ليدل على التفعيل
                  }}
                />
                {formData.phoneNumbers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePhoneField(index)}
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#ef4444",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>
              {/* رسالة الخطأ اللحظية الديناميكية تظهر أسفل الحقل مباشرة */}
              {phoneErrors[index] && (
                <span
                  style={{
                    color: "#ef4444",
                    fontSize: "12px",
                    marginTop: "4px",
                    display: "block",
                    fontWeight: "500",
                  }}
                >
                  {getPhoneErrorMessage(formData.countryCode, locale)}
                </span>
              )}
            </div>
          ))}

          {formData.phoneNumbers.length < 4 && formData.countryCode && (
            <button
              type="button"
              onClick={addPhoneField}
              style={{
                marginTop: "5px",
                padding: "6px 12px",
                backgroundColor: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {locale === "fr" ? "+ Ajouter" : "+ إضافة رقم آخر"}
            </button>
          )}
        </div>

        {/* حقل الولايات */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            {locale === "fr" ? "Wilaya / Ville" : "الولاية / المدينة"}:
          </label>
          <select
            name="stateCode"
            value={formData.stateCode}
            onChange={handleChange}
            disabled={!formData.countryCode}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "#000",
            }}
          >
            <option value="">
              {locale === "fr" ? "Sélectionner..." : "اختر المدينة..."}
            </option>
            {availableRegions.map((region, index) => (
              <option key={index} value={region.ville}>
                {region.ville}
              </option>
            ))}
          </select>
        </div>

        {/* العنوان والحي */}
        <div style={{ marginBottom: "20px" }}>
          <label>
            {locale === "fr" ? "Quartier / Adresse" : "الحي / العنوان"}:
          </label>
          <input
            type="text"
            name="cityDistrict"
            value={formData.cityDistrict}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              color: "#000",
              backgroundColor: "#fff",
            }}
          />
        </div>

        {/* السجل التجاري */}
        <div
          style={{
            marginBottom: "30px",
            padding: "15px",
            border: "1px dashed #3b82f6",
            borderRadius: "8px",
            backgroundColor: "#eff6ff",
          }}
        >
          <label
            style={{
              fontWeight: "bold",
              display: "block",
              marginBottom: "8px",
              color: "#1e40af",
            }}
          >
            {locale === "fr" ? "Registre du Commerce" : "وثيقة السجل التجاري"}:
          </label>
          <input
            type="file"
            id="registre_file"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            required
            style={{ width: "100%", color: "#000" }}
          />
        </div>

        <button
          type="submit"
          disabled={status.loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#F30000",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {status.loading
            ? "..."
            : locale === "fr"
              ? "S'inscrire"
              : "إرسال الطلب"}
        </button>
      </form>

      {status.message && (
        <div
          style={{
            marginTop: "20px",
            padding: "12px",
            borderRadius: "6px",
            textAlign: "center",
            backgroundColor: status.error ? "#fef2f2" : "#f0fdf4",
            color: status.error ? "#991b1b" : "#166534",
          }}
        >
          {status.message}
        </div>
      )}
    </div>
  );
}
