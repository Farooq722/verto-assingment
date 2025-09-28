import { create } from "zustand";

interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
}

interface EmployeeStore {
  allEmployees: Employee[];
  isLoading: boolean,
  setIsLoading: (status: boolean) => void;
  setAllEmployees: (data: Employee[]) => void;
  addEmployee: (emp: Employee) => void;
  updateEmployee: (id: string, updated: Partial<Employee>) => void;
  deleteEmployee: (id: string) => void;
}

export const useEmployeeData = create<EmployeeStore>((set) => ({
  allEmployees: [],

  isLoading: false,
  
  setAllEmployees: (data) => set({ allEmployees: data }),

  setIsLoading: (status) => set({ isLoading: status }),

  //add employee with existing one's
  addEmployee: (emp) =>
    set((state) => ({
      allEmployees: [...state.allEmployees, emp],
    })),

  //update employe detailss
  updateEmployee: (id, updated) =>
    set((state) => ({
      allEmployees: state.allEmployees.map((emp) =>
        emp.id === id ? { ...emp, ...updated } : emp
      ),
    })),

  //delete emp with id
  deleteEmployee: (id) =>
    set((state) => ({
      allEmployees: state.allEmployees.filter((emp) => emp.id !== id),
    })),
}));
