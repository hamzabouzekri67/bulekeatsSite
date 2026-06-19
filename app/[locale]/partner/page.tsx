"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Country, State } from "country-state-city";
import { fetchTagsList, registerStore } from "./api/handler_signup";

interface RestaurantFormData {
  firstName: string;
  lastName: string;
  restaurantName: string;
  restaurantType: string;
  countryCode: string;
  stateCode: string;
  cityDistrict: string;
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
    countryCode: "",
    stateCode: "",
    cityDistrict: "",
  });

  // حالة لتخزين ملف السجل التجاري المرفوع
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
        console.log(response);

        if (response && response.status === true) {
          setRestaurantTypes(response.result.findData);
          setDbCountries(response.result.country || []);
        }
      } catch (error) {
      } finally {
        setLoadingTypes(false);
      }
    };

    fetchRestaurantTypes();
  }, []);

  // const countries = Country.getAllCountries();
  // const states = formData.countryCode
  //   ? State.getStatesOfCountry(formData.countryCode)
  //   : [];

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
    if (name === "countryCode") {
      setFormData((prev) => ({ ...prev, countryCode: value, stateCode: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
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

    // التحقق من رفع الوثيقة أولاً
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

    const currentCountryObj = dbCountries.find(
      (c) => c.country_code === formData.countryCode,
    );
    const selectedCountry = currentCountryObj ? currentCountryObj.country : "";

    const selectedState = formData.stateCode;

    // إعداد الـ FormData لإرسال النصوص والملفات معاً
    const dataToSend = new FormData();
    dataToSend.append("name", formData.firstName);
    dataToSend.append("namefamilly", formData.lastName);
    dataToSend.append("nameEtabliss", formData.restaurantName);
    dataToSend.append("typeEtabliss", formData.restaurantType);
    dataToSend.append("pays", selectedCountry);
    dataToSend.append("ville", selectedState);
    dataToSend.append("state", formData.cityDistrict);
    dataToSend.append("document", registreCommerce); // إرفاق ملف الصورة/الوثيقة

    try {
      const response = await registerStore(dataToSend);

      if (response.status == true) {
        setStatus({
          loading: false,
          message:
            locale === "fr"
              ? "Inscription réussie! Documents reçus."
              : "تم التسجيل بنجاح! تم استلام وثائقكم.",
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
        });
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
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {locale === "fr" ? "Devenir Partenaire" : "تسجيل شريك جديد"}
      </h2>
      <p
        style={{ textAlign: "center", color: "#6b7280", marginBottom: "30px" }}
      >
        {locale === "fr"
          ? "Enregistrez votre restaurant et importez vos documents"
          : "قم بتسجيل مطعمك وارفع الوثائق الرسمية"}
      </p>

      <form onSubmit={handleSubmit}>
        {/* الاسم واللقب */}
        <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: "500" }}>
              {locale === "fr" ? "Prénom" : "الاسم الأول"}:
            </label>
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
                color: "#000000",
                backgroundColor: "#ffffff",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: "500" }}>
              {locale === "fr" ? "Nom" : "اللقب"}:
            </label>
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
                color: "#000000",
                backgroundColor: "#ffffff",
              }}
            />
          </div>
        </div>

        {/* اسم المطعم */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "500" }}>
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
              color: "#000000",
              backgroundColor: "#ffffff",
            }}
          />
        </div>

        {/* نوع النشاط - التعديل الأساسي هنا */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "500" }}>
            {locale === "fr" ? "Type d'Entreprise" : "نوع الشركة"}:
          </label>
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
              backgroundColor: loadingTypes ? "#f3f4f6" : "#ffffff",
              color: "#000000",
            }}
          >
            <option value="">
              {loadingTypes
                ? locale === "fr"
                  ? "Chargement..."
                  : "جاري التحميل..."
                : locale === "fr"
                  ? "Choisir..."
                  : "اختر النوع..."}
            </option>

            {/* نقوم بعرض الاسم بناءً على اللغة الحالية (ar_name أو name) */}
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

        {/* حقل الدول */}
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

        {/* حقل الولايات */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "500" }}>
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
                {region.ville}{" "}
                {/* ستظهر الأسعار بالفرنسية النظيفة مباشرة: Alger, Blida, Khenchela */}
              </option>
            ))}
          </select>
        </div>

        {/* العنوان والحي */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "500" }}>
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
              color: "#000000",
              backgroundColor: "#ffffff",
            }}
          />
        </div>

        {/* حقل رفع السجل التجاري */}
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
            {locale === "fr"
              ? "Registre du Commerce (Image / PDF)"
              : "وثيقة السجل التجاري (صورة / PDF)"}
            :
          </label>
          <input
            type="file"
            id="registre_file"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            required
            style={{ width: "100%", color: "#000000" }}
          />
          <small
            style={{ display: "block", marginTop: "5px", color: "#1e3a8a" }}
          >
            {locale === "fr"
              ? "Formats acceptés: JPG, PNG, PDF (Max 5MB)"
              : "الصيغ المدعومة: JPG، PNG، PDF (الحد الأقصى 5 ميجابايت)"}
          </small>
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
              : "إرسال الطلب مع الوثائق"}
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
            fontWeight: "500",
          }}
        >
          {status.message}
        </div>
      )}
    </div>
  );
}
