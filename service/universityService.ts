import type { NitroFetchRequest, $Fetch } from "nitropack";
import type { University } from "~/types/university";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (ofetch: $Fetch<any, NitroFetchRequest>) => {
  const getAcceptLanguage = () => {
    if (import.meta.client) {
      const { locale } = useI18n();
      return locale.value;
    }
    return "en";
  };

  return {
    getUniversity: async (id: number) => {
      const data = await ofetch(`/universities/${id}`, {
        method: "GET",
        headers: {
          "accept-language": getAcceptLanguage(),
        },
      });

      return data;
    },

    getUniversities: async () => {
      const data = await ofetch(`/universities`, {
        method: "GET",
        headers: {
          "accept-language": getAcceptLanguage(),
        },
      });

      return data;
    },

    getUniversityBySpeciality: async (speciality: string) => {
      const data = await ofetch(`/universities/by-speciality/${speciality}`, {
        method: "GET",
        headers: {
          "accept-language": getAcceptLanguage(),
        },
      });

      return data;
    },

    getUniversityByCountry: async (country: string) => {
      const data = await ofetch(`/universities/by-country/${country}`, {
        method: "GET",
        headers: {
          "accept-language": getAcceptLanguage(),
        },
      });

      return data;
    },

    createUniversity: async (university: University) => {
      const data = await ofetch(`/universities`, {
        method: "POST",
        body: university,
        headers: {
          "accept-language": getAcceptLanguage(),
        },
      });

      return data;
    },

    updateUniversity: async (id: number, university: University) => {
      const data = await ofetch(`/universities/${id}`, {
        method: "PUT",
        body: university,
        headers: {
          "accept-language": getAcceptLanguage(),
        },
      });

      return data;
    },

    deleteUniversity: async (id: number) => {
      const data = await ofetch(`/universities/${id}`, {
        method: "DELETE",
        headers: {
          "accept-language": getAcceptLanguage(),
        },
      });

      return data;
    },
  };
};
