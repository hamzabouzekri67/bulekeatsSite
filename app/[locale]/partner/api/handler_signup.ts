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
      headers: {},
      credentials: "include",
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();
      //console.log(data);

      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
