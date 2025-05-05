import type { Speciality } from "~/types/speciality";

export const useSpecialityStore = defineStore("speciality", () => {
  const { $specialityService } = useNuxtApp();

  const specialities = ref<Speciality[]>([]);
  const speciality = ref<Speciality | null>(null);

  const getSpecialities = async () => {
    const data = await $specialityService.getSpecialities();
    specialities.value = data;
  };

  const getSpeciality = async (id: number) => {
    const data = await $specialityService.getSpeciality(id);
    speciality.value = data;
  };

  const getSpecialitiesBySubject = async (
    subjectId1: number,
    subjectId2: number,
  ) => {
    const data = await $specialityService.getSpecialitiesBySubject(
      subjectId1,
      subjectId2,
    );
    specialities.value = data;
  };

  const createSpeciality = async (speciality: Speciality) => {
    const data = await $specialityService.createSpeciality(speciality);
    specialities.value.push(data);
  };

  const updateSpeciality = async (id: number, speciality: Speciality) => {
    const data = await $specialityService.updateSpeciality(id, speciality);
    specialities.value = specialities.value.map((s) =>
      s.id === id ? data : s,
    );
  };

  const deleteSpeciality = async (id: number) => {
    await $specialityService.deleteSpeciality(id);
    specialities.value = specialities.value.filter((s) => s.id !== id);
  };

  return {
    specialities,
    speciality,
    getSpecialities,
    getSpeciality,
    getSpecialitiesBySubject,
    createSpeciality,
    updateSpeciality,
    deleteSpeciality,
  };
});
