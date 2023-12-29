-- CreateTable
CREATE TABLE "Departamento" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Distrito" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "departamentoId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Departamento_id_key" ON "Departamento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Distrito_id_key" ON "Distrito"("id");

-- AddForeignKey
ALTER TABLE "Distrito" ADD CONSTRAINT "Distrito_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "Departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
