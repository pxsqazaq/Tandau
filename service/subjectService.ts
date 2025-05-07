import type { NitroFetchRequest, $Fetch } from "nitropack";
import type { Subject } from "~/types/subject";
import { useI18n } from 'vue-i18n';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (ofetch: $Fetch<any, NitroFetchRequest>) => {
  const getAcceptLanguage = () => {
    const { locale } = useI18n();
    if(locale){
      return locale.value;
    }
    return "en";
  };

  return {
    getSubjects: async () => {
      const data = await ofetch("/subjects", {
        method: "GET",
        headers: {
          "accept-Language": getAcceptLanguage(),
        },
      });
  
      return data;
    },
  
    getSubject: async (id: number) => {
      const data = await ofetch(`/subjects/${id}`, {
        method: "GET",
        headers: {
          "accept-Language": getAcceptLanguage(),
        },
      });
  
      return data;
    },
  
    getSubjectCombinations: async () => {
        const data = await ofetch("/subject-combinations", {
          method: "GET",
          headers: {
            "accept-language": getAcceptLanguage(),
          },
        });
        return data;
    },
  
    getSubjectCombination: async (id: number) => {
      const data = await ofetch(`/subject-combinations/${id}`, {
        method: "GET",
        headers: {
          "accept-Language": getAcceptLanguage(),
        },
      });
  
      return data;
    },
  
    getSpecialities: async () => {
      const data = await ofetch("/specialties", {
        method: "GET",
        headers: {
          "accept-Language": getAcceptLanguage(),
        },
      });
  
      return data;
    },
  
    getSpeciality: async (id: number) => {
      const data = await ofetch(`/specialties/${id}`, {
        method: "GET",
        headers: {
          "accept-Language": getAcceptLanguage(),
        },
      });
  
      return data;
    },
  
    getSpecialityBySubjects: async (subject1_id: number, subject2_id: number) => {
      const data = await ofetch(
        `/specialties/by-subjects?subject1_id=${subject1_id}&subject2_id=${subject2_id}`,
        {
          method: "GET",
          headers: {
            "accept-Language": getAcceptLanguage(),
          },
        },
      );
  
      return data;
    },
  
    createSubject: async (subject: Subject) => {
      const data = await ofetch("/subjects", {
        method: "POST",
        body: subject,
      });
  
      return data;
    },
  
    updateSubject: async (id: number, subject: Subject) => {
      const data = await ofetch(`/subjects/${id}`, {
        method: "PUT",
        body: subject,
      });
  
      return data;
    },
  
    deleteSubject: async (id: number) => {
      const data = await ofetch(`/subjects/${id}`, {
        method: "DELETE",
      });
  
      return data;
    },
  };
};
