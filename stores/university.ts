import type { University } from "~/types/university";

export const useUniversityStore = defineStore("university", () => {
  const { $universityService } = useNuxtApp();

  const universities = ref<University[]>([]);
  const university = ref<University | null>(null);

  const isLoading = ref(false);
  const errorMessage = ref<string | null>(null);

  const getUniversities = async () => {
    isLoading.value = true;
    try {
      const data = await $universityService.getUniversities();
      universities.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const getUniversity = async (id: number) => {
    isLoading.value = true;
    try {
      const data = await $universityService.getUniversity(id);
      university.value = data;
      return data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const getUniversityBySpeciality = async (speciality: string) => {
    isLoading.value = true;
    try {
      const data =
        await $universityService.getUniversityBySpeciality(speciality);
      universities.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const getUniversityByCountry = async (country: string) => {
    isLoading.value = true;
    try {
      const data = await $universityService.getUniversityByCountry(country);
      universities.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const createUniversity = async (university: University) => {
    isLoading.value = true;
    try {
      const data = await $universityService.createUniversity(university);
      universities.value.push(data);
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const updateUniversity = async (id: number, university: University) => {
    isLoading.value = true;
    try {
      const data = await $universityService.updateUniversity(id, university);
      universities.value = universities.value.map((u) =>
        u.id === id ? data : u,
      );
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const deleteUniversity = async (id: number) => {
    isLoading.value = true;
    try {
      await $universityService.deleteUniversity(id);
      universities.value = universities.value.filter((u) => u.id !== id);
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(async () => {
    await getUniversities();
  });

  return {
    universities,
    university,
    isLoading,
    errorMessage,
    getUniversities,
    getUniversity,
    getUniversityBySpeciality,
    getUniversityByCountry,
    createUniversity,
    updateUniversity,
    deleteUniversity,
  };
});
