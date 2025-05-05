import type { NitroFetchRequest, $Fetch } from "nitropack";
import type { Speciality } from "~/types/speciality";

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
    getSpecialities: async () => {
      const data = await ofetch("/specialities", {
        method: "GET",
        headers: {
          "accept-language": getAcceptLanguage(),
        },
      });

      return data;
    },

    getSpeciality: async (id: number) => {
      const data = await ofetch(`/specialities/${id}`, {
        method: "GET",
        headers: {
          "accept-language": getAcceptLanguage(),
        },
      });

      return data;
    },

    getSpecialitiesBySubject: async (
      subjectId1: number,
      subjectId2: number,
    ) => {
      const data = await ofetch(
        `/specialities/by-subject/${subjectId1}/${subjectId2}`,
        {
          method: "GET",
          headers: {
            "accept-language": getAcceptLanguage(),
          },
        },
      );

      return data;
    },

    createSpeciality: async (speciality: Speciality) => {
      const data = await ofetch("/specialities", {
        method: "POST",
        body: speciality,
      });

      return data;
    },

    updateSpeciality: async (id: number, speciality: Speciality) => {
      const data = await ofetch(`/specialities/${id}`, {
        method: "PUT",
        body: speciality,
      });

      return data;
    },

    deleteSpeciality: async (id: number) => {
      const data = await ofetch(`/specialities/${id}`, {
        method: "DELETE",
      });

      return data;
    },
  };
};
