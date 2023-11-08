import  prismaClient  from "../prisma";

interface DeleteCustomerProps{
    id: string;
    
}

class DeleteCustomerService{
  async execute({id}: DeleteCustomerProps){
    if (!id) {
      throw new Error("Solicição inválida");
    }

    const findcustomer = await prismaClient.customer.findFirst({
      where: {
        id,
      },
    })
    
    if(!findcustomer){
        throw new Error("cliente não encontrado")
    }


    await prismaClient.customer.delete({
        where: {
            id: findcustomer.id,
        },
        });

        return {message: "cliente deletado com sucesso!"}

  }
}

export {DeleteCustomerService};