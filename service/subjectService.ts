import type { NitroFetchRequest, $Fetch } from "nitropack";
import type { Subject } from "~/types/subject";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (ofetch: $Fetch<any, NitroFetchRequest>) => ({
  getSubjects: async () => {
    const data = await ofetch("/subjects", {
      method: "GET",
    });

    return data;
  },

  getSubject: async (id: number) => {
    const data = await ofetch(`/subjects/${id}`, {
      method: "GET",
    });

    return data;
  },

  getSubjectCombinations: async () => {
    const data = await ofetch("/subject-combinations", {
      method: "GET",
    });

    return data;
  },

  getSubjectCombination: async (id: number) => {
    const data = await ofetch(`/subject-combinations/${id}`, {
      method: "GET",
    });

    return data;
  },

  getSpecialities: async () => {
    const data = await ofetch("/specialties", {
      method: "GET",
    });

    return data;
  },

  getSpeciality: async (id: number) => {
    const data = await ofetch(`/specialties/${id}`, {
      method: "GET",
    });

    return data;
  },

  getSpecialityBySubjects: async (subject1_id: number, subject2_id: number) => {
    const data = await ofetch(
      `/specialties/by-subjects?subject1_id=${subject1_id}&subject2_id=${subject2_id}`,
      {
        method: "GET",
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
});
