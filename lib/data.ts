import api from "@/oneentry";

export async function fetchMenuItems(marker: string) {
  try {
    const menus = await api.Menus.getMenusByMarker(marker);
    return menus;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch menu items.");
  }
}

export async function fetchAllForms() {
  try {
    const formsData = await api.Forms.getAllForms();

    const forms = Object.values(formsData)
      .map((form) => form)
      .sort((a, b) => b.position - a.position);

    return forms;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch forms.");
  }
}

export async function fetchFormById(id: string) {
  try {
    const formData = await api.Forms.getFormByMarker(id);

    return formData;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch form.");
  }
}

export async function fetchAllFormsData() {
  try {
    const formsData = await api.FormData.getFormsData();

    return formsData;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch forms data.");
  }
}
