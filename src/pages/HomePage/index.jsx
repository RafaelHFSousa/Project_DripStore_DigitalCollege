import axios from "axios";
import { CarouselPrime } from "../../components/Carrossel";
import { ColecaoDestaque } from "../../components/ColecaoDestaque";
import { ColecoesDestaqueStyled, ProdutosAlta } from "./styled";
import { useEffect, useState } from "react";
import { ProductCardHome } from "../../components/ProductCardHome";
import { OfertaEspecial } from "../../components/OfertaEspecial";

export const HomePage = () => {
  const [produtos, setProdutos] = useState();
  async function buscarApi() {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    const novaArray8 = data.filter((e) => e.id < 9);
    setProdutos(novaArray8);
  }
  useEffect(() => {
    buscarApi();
  }, []);
  return (
    <>
      <CarouselPrime />
      <section>
        <div style={{ marginLeft: "25px" }}>
          <h3>Coleções em destaque</h3>
        </div>
        <ColecoesDestaqueStyled>
          <ColecaoDestaque discount={"30"} bgImageSrc={"/collection-1.png"} />
          <ColecaoDestaque discount={"30"} bgImageSrc={"/collection-2.png"} />
          <ColecaoDestaque discount={"30"} bgImageSrc={"/collection-3.png"} />
        </ColecoesDestaqueStyled>
      </section>
      <section>
        <div
          style={{
            marginTop: "50px",
            padding: "10px 20px",
            backgroundColor: "#F3F4F6",
            fontweight: "bold",
          }}
        >
          <h3>Produtos em alta</h3>
        </div>
        <ProdutosAlta>
          {produtos &&
            produtos.map((e) => <ProductCardHome key={e.id} produto={e} />)}
        </ProdutosAlta>
      </section>
      <OfertaEspecial
        imageSrc={"/ofertaEspecial.png"}
        imageAlt={"imagem da ofeta"}
      />
    </>
  );
};
