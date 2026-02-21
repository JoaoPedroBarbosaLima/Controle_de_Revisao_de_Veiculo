import api from "./api";

export async function ValidarLogin() {
  try {
    const res = await api.get("api/auth/validate", {
      withCredentials: true,
    });


    return res;
  } catch (error) {
    console.error("Erro ao validar login:", error);
    return false;
  }
}