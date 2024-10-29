import { ModalContainer, TradeContainer } from "./styles";
import { tradeApi, TradeProps } from "../../api/routes/TradeApi";
import { useEffect, useState } from "react";
import { TradeCard } from "./components/TradeCard";
import { Modal } from "../../components/Modal";
import { Form } from "./components/Form";
import Lottie from "react-lottie";
import animation from "../../assets/animatation.json";

export function Trade() {
  const [tradeList, setTradeList] = useState<TradeProps[]>([]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const fetchTradeList = async () => {
    const data = await tradeApi.getTradeList();
    setTradeList(data.data);
  };

  useEffect(() => {
    fetchTradeList();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TradeContainer>
        <Modal
          color="unknown"
          label="Register Pokémon "
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        >
          <ModalContainer>
            <h1>Register Pokemon</h1>
            <Form
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              fetchTradeList={fetchTradeList}
            />
          </ModalContainer>
        </Modal>

        {tradeList.length > 0 ? (
          tradeList.map((trade) => (
            <TradeCard
              ability={trade.ability}
              name={trade.name}
              nature={trade.Nature.name}
              color={trade.type1}
              shiny={trade.shiny}
              user={trade.User?.name}
              email={trade.User?.email}
              key={trade.id}
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              species={trade.species}
            />
          ))
        ) : (
          <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        )}
      </TradeContainer>
    </>
  );
}
