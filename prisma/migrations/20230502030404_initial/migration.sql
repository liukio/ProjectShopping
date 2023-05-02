-- CreateTable
CREATE TABLE "costumer" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "costumer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shopping" (
    "productId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "Shopping_pkey" PRIMARY KEY ("customerId","productId")
);

-- CreateIndex
CREATE UNIQUE INDEX "costumer_email_key" ON "costumer"("email");

-- AddForeignKey
ALTER TABLE "Shopping" ADD CONSTRAINT "Shopping_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shopping" ADD CONSTRAINT "Shopping_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "costumer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
