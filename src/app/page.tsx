import { Suspense } from "react";
import GithubProfile from "@/components/github-profile";
import { LongWaitComponent } from "@/components/long-wait-component";



export default async function Home() {

  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return (
      <div>
        <h1>Home!</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cumque facere? 
          Dolor alias tempora iure suscipit praesentium provident repudiandae, voluptates reiciendis illo accusantium voluptatem ab corporis veritatis deserunt atque possimus.
        </p>

        <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
          <LongWaitComponent />
        </Suspense>
        
        <Suspense fallback={<p>Carregando GithubProfile</p>}>
          <GithubProfile />
        </Suspense>
        
      </div>
  )
  
}
