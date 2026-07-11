const API_URL = process.env.NEXT_PUBLIC_API_URL;
const FETCH_TAGS = process.env.NEXT_PUBLIC_FETCH_TAGS;
const REGEISTER_STORE = process.env.NEXT_PUBLIC_REGEISTER_STORE;
export async function fetchTagsList() {
  try {
    //  console.log("dataToSend");

    const url = `${API_URL}${FETCH_TAGS}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {},
      // headers: { "Content-Type": "application/json" },
      credentials: "include",
      //body: dataToSend,
    });

    if (res.ok) {
      const data = await res.json();
      //console.log(data);

      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function registerStore(formData: FormData) {
  try {
    const url = `${API_URL}${REGEISTER_STORE}`;
    console.log(url);

    const res = await fetch(url, {
      method: "POST",
      headers: {}, // لا تضع Content-Type: multipart/form-data هنا، المتصفح يضيفها تلقائياً مع الحدود
      body: formData,
    });

    // تحويل الاستجابة إلى JSON في كل الأحوال
    const data = await res.json();
    console.log("Response data:", data);

    if (data.status === false) {
      alert(data.message || "حدث خطأ ما");
      return { success: false, message: data.message };
    }

    if (res.ok) {
      console.log("Success:", data);
      return { success: true, data: data };
    } else {
      console.error("Server Error:", data);
    }
  } catch (error) {
    console.error("Network or parsing error:", error);
  }
}
