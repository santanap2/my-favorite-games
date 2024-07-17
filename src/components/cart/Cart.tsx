import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { IGame, IShoppingCart } from '@/interfaces'
import ItemCart from './ItemCart'
import CheckoutButton from './CheckoutButton'
import CartButton from '../header/CartButton'
import EmptyCartForm from './EmptyCartForm'
import * as SheetPrimitive from '@radix-ui/react-dialog'

export default async function Cart({
  sessionEmail,
}: {
  userCart: IShoppingCart | null
  sessionEmail: string | null
}) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get-user-cart?email=${sessionEmail}`,
    {
      next: {
        tags: ['user-cart'],
      },
    },
  )

  const data = await result.json()
  const userCart = data.cart
  const cartLength = userCart?.products?.length || 0

  return (
    <Sheet>
      <SheetTrigger className="h-full flex items-center justify-center relative transition-all text-neutral-300">
        <CartButton cartLength={cartLength} />
      </SheetTrigger>
      <SheetContent className="fixed z-50 right-0 top-0 bottom-0 h-dvh w-[480px] bg-neutral-950 bg-opacity-80 backdrop-blur-sm border-l border-neutral-800 text-neutral-300 py-6 pl-6 shadow-2xl flex flex-col justify-start gap-0 sm:w-[85%] sm:py-3 sm:px-3">
        <SheetHeader>
          <SheetTitle className="tracking-wider font-black text-base text-start w-full">
            Carrinho
          </SheetTitle>
          <SheetDescription className="hidden absolute">
            Carrinho de compras
          </SheetDescription>
        </SheetHeader>

        {userCart && userCart.products.length > 0 && (
          <EmptyCartForm sessionEmail={sessionEmail as string} />
        )}

        <div className="w-full h-full overflow-hidden flex flex-col justify-between items-center">
          <div className="flex flex-col w-full justify-between items-center gap-10 overflow-y-auto">
            {!userCart || !userCart.products ? (
              sessionEmail ? (
                <span className="text-sm font-semibold mt-16">
                  Seu carrinho está vazio.
                </span>
              ) : (
                <span className="text-sm font-semibold mt-16">
                  Faça login para adicionar itens ao carrinho
                </span>
              )
            ) : userCart.products.length === 0 ? (
              <div className="flex w-full h-full justify-center items-start text-sm">
                <span className="text-sm font-semibold mt-16">
                  Seu carrinho está vazio.
                </span>
              </div>
            ) : (
              <div className="w-full h-fit flex flex-col gap-4 pr-4 sm:pr-2 sm:gap-4">
                {userCart.products.map(
                  ({
                    id,
                    description,
                    category,
                    image,
                    name,
                    price,
                  }: IGame) => (
                    <ItemCart
                      key={id}
                      id={id}
                      description={description}
                      category={category}
                      name={name}
                      image={image}
                      price={price}
                      userEmail={sessionEmail}
                    />
                  ),
                )}
              </div>
            )}
          </div>
          {userCart && userCart.products.length > 0 && (
            <div className="w-full flex flex-col items-center justify-center gap-3 pt-6">
              <SheetPrimitive.Close className="w-full">
                <CheckoutButton userCart={userCart} />
              </SheetPrimitive.Close>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
