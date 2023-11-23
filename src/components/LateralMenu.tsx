import React from 'react'
import MenuItem from './MenuItem'
import {
  Bag,
  Books,
  Chat,
  Heart,
  House,
  SignOut,
  ThumbsUp,
  User,
} from '@phosphor-icons/react'

export default function LateralMenu() {
  return (
    <div className="fixed left-0 top-0 bottom-0 flex flex-col pt-20 pl-6 h-full justify-between bg-zinc-100">
      <div className="flex flex-col">
        <MenuItem
          Icon={House}
          name="Início"
          size={34}
          link="/minha-conta"
          iconClass="text-sky-600"
        />
        <MenuItem
          Icon={User}
          name="Meus dados"
          size={34}
          link="/meus-dados"
          iconClass="text-sky-600"
        />
        <MenuItem
          Icon={Bag}
          name="Meus pedidos"
          size={34}
          link="/meus-pedidos"
          iconClass="text-sky-600"
        />
        <MenuItem
          Icon={Books}
          name="Meus cursos"
          size={34}
          link="/meus-cursos"
          iconClass="text-sky-600"
        />
        <MenuItem
          Icon={ThumbsUp}
          name="Avaliações"
          size={34}
          link="/minhas-avaliacoes"
          iconClass="text-sky-600"
        />
        <MenuItem
          Icon={Heart}
          name="Favoritos"
          size={34}
          link="/meus-favoritos"
          iconClass="text-sky-600"
        />
        <MenuItem
          Icon={Chat}
          name="Ajuda"
          size={34}
          link="/ajuda"
          iconClass="text-sky-600"
        />
      </div>

      <MenuItem
        Icon={SignOut}
        name="Sair"
        size={34}
        link="/logout"
        especialClass="mb-4 hover:text-orange-400"
        iconClass="text-orange-600"
      />
    </div>
  )
}
