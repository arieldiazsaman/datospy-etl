export type Distritos = {
  results: Distrito[];
  meta: Meta;
};

export type Distrito = {
  id: number;
  nombre: string;
  departamento: Departamento;
};

export type Departamento = {
  id: number;
  nombre: string;
};

export type Meta = {
  pageSize: number;
  totalPages: number;
  totalCount: number;
};
