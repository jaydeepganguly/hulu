import Image from "next/image"
import HeaderItems from "./HeaderItems"
import { HomeIcon ,
   LightningBoltIcon ,
    BadgeCheckIcon ,
    CollectionIcon ,
    SearchIcon ,
    UserIcon } from '@heroicons/react/outline';

function Headers() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItems  title='HOME' Icon={HomeIcon}/>
          <HeaderItems title="TRENDING" Icon={LightningBoltIcon}/>
          <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon}/>
          <HeaderItems title="COLLECTIONS" Icon={CollectionIcon}/>
          <HeaderItems title="SEARCH" Icon={SearchIcon}/>
          <HeaderItems title="ACCOUNT" Icon={UserIcon}/>
        </div>
       <Image 
       className="object-contain"
       src="https://findicons.com/files/icons/1253/flurry_extras/128/hulu.png" width={200} height={100} />
    </header>
  )
}

export default Headers