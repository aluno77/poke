import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router';

const Poke = ({ data }) => {
  const router = useRouter()
  console.log(router);
  
/*   if(router.isFallback){ // quando usamos 'blocking' desabilitamos esta validação
    return <p>Cargando fallback</p>
  } */

  return (
    <div>
      <h1>
        {data.name} numero # {data.id}
      </h1>
      <Image
        src={data.sprites.front_default}
        alt="pokemos"
        width={400}
        height={400}
      />
      <Link href="/"> Voltar ao Inicio</Link>
    </div>
  );
};

export default Poke;

export const getStaticProps = async ({ params }) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await resp.json();

  return { props: { data } };
};

export const getStaticPaths = async () => {
  const paths = [
    { params: { id: "1" } }, 
    { params: { id: "2" } },
    { params: { id: "3" } }
  ];

  return {
    paths: paths,
    fallback: 'blocking',
    //fallback: true,
  };
};
/* export const getServerSideProps = async ({ params }) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await resp.json();

  return { props: { data } };
};
 */
