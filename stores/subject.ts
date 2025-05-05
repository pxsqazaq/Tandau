import type { Speciality } from "~/types/speciality";
import type { Subject, subjectCombinations } from "~/types/subject";

export const useSubjectStore = defineStore("subject", () => {
  const { $subjectService } = useNuxtApp();

  const subjects = ref<Subject[]>([]);
  const subject = ref<Subject | null>(null);
  const subjectCombinations = ref<subjectCombinations[]>([]);
  const subjectCombination = ref<subjectCombinations | null>(null);
  const specialities = ref<Speciality[]>([]);
  const speciality = ref<Speciality | null>(null);
  const specialityBySubjects = ref<Speciality | null>(null);

  const isLoading = ref(false);
  const errorMessage = ref<string | null>(null);

  const getSubjects = async () => {
    isLoading.value = true;
    try {
      const data = await $subjectService.getSubjects();

      subjects.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const getSubject = async (id: number) => {
    isLoading.value = true;
    try {
      const data = await $subjectService.getSubject(id);
      subject.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const getSubjectCombinations = async () => {
    isLoading.value = true;
    try {
      const data = await $subjectService.getSubjectCombinations();
      subjectCombinations.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const getSubjectCombination = async (id: number) => {
    isLoading.value = true;
    try {
      const data = await $subjectService.getSubjectCombination(id);
      subjectCombination.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const getSpecialities = async () => {
    isLoading.value = true;
    try {
      const data = await $subjectService.getSpecialities();
      specialities.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const getSpeciality = async (id: number) => {
    isLoading.value = true;
    try {
      const data = await $subjectService.getSpeciality(id);
      speciality.value = data;
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const getSpecialityBySubjects = async (
    subject1_id: number,
    subject2_id: number,
  ) => {
    isLoading.value = true;
    specialityBySubjects.value = null;
    try {
      const data = await $subjectService.getSpecialityBySubjects(
        subject1_id,
        subject2_id,
      );
      specialityBySubjects.value = data;
    } catch (error) {
      errorMessage.value = error as string;
      specialityBySubjects.value = null;
    } finally {
      isLoading.value = false;
    }
  };

  const createSubject = async (subject: Subject) => {
    isLoading.value = true;
    try {
      const data = await $subjectService.createSubject(subject);
      subjects.value.push(data);
    } catch (error) {
      errorMessage.value = error as string;
    } finally {
      isLoading.value = false;
    }
  };

  const updateSubject = async (id: number, subject: Subject) => {
    const data = await $subjectService.updateSubject(id, subject);
    subjects.value = subjects.value.map((s) => (s.id === id ? data : s));
  };

  const deleteSubject = async (id: number) => {
    await $subjectService.deleteSubject(id);
    subjects.value = subjects.value.filter((s) => s.id !== id);
  };

  onMounted(async () => {
    await getSubjects();
    await getSubjectCombinations();
    await getSpecialities();
  });

  return {
    subjects,
    subject,
    subjectCombinations,
    subjectCombination,
    speciality,
    specialities,
    specialityBySubjects,
    isLoading,
    errorMessage,
    getSubjects,
    getSubject,
    getSubjectCombinations,
    getSubjectCombination,
    getSpecialities,
    getSpeciality,
    getSpecialityBySubjects,
    createSubject,
    updateSubject,
    deleteSubject,
  };
});
