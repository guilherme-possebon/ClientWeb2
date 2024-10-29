import { Chat } from "@phosphor-icons/react";
import {
  TradeCardContainer,
  TradeCardContent,
  TradeCardStatus,
  TradeImage,
} from "./styles";
import {
  ParamsTypePokemon,
  pokemonApi,
  PokemonType,
} from "../../../../api/routes/PokedexApi";
import { useEffect, useState } from "react";
import { Modal } from "../../../../components/Modal";
import { ModalContainer } from "../../styles";
import { emailAPi } from "../../../../api/routes/EmailApi";
import { toast } from "react-toastify";
import { Button } from "../../../../components/Button";
import { env } from "process";

interface TradeProps {
  color: string;
  name: string;
  image: string;
  nature: string;
  ability: string;
  user: string;
  shiny: boolean;
  email: string;
  species: ParamsTypePokemon;
}

export function TradeCard({
  color,
  nature,
  ability,
  user,
  shiny,
  email,
  species,
}: TradeProps) {
  const [pokemon, setPokemon] = useState<PokemonType>();
  const getImage = async (species: ParamsTypePokemon) => {
    const data = await pokemonApi.getPokemon(species);
    setPokemon(data.data[0]);
  };

  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");

  const enviarEmail = async () => {
    const data = {
      from: 'fallerbruno@gmail.com',
      to: email,
      message: message,
      subject: "Troca de Pokemon",
    };
    await emailAPi.sendMail(data);
    toast.success("Email enviado com sucesso");
    setModal(!modal);
  };

  useEffect(() => {
    getImage(species);
  }, []);

  return (
    <TradeCardContainer $color={color}>
      <TradeCardContent>
        <TradeImage src={shiny ? pokemon?.spriteShiny : pokemon?.sprite} />
        <TradeCardStatus>
          <p>Specie: {species.toString()}</p>
          <p>Nature: {nature}</p>
          <p>Ability: {ability}</p>
          <p>Shiny: {shiny ? "Yes" : "No"}</p>
          <p>User: {user}</p>
          <p>Email: {email}</p>
        </TradeCardStatus>
      </TradeCardContent>
      <div>
        <Modal
          isOpen={modal}
          setIsOpen={setModal}
          color="unknown"
          label="Enviar Email"
        >
          <ModalContainer>
            <h2>Enviar email</h2>
            <p>Para: {email}</p>
            <p>Assunto: Troca de Pokemon</p>
            <div>
              <label>Mensagem</label>
              <input
                type="text"
                placeholder="mensagem"
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <Button
              onClick={() => {
                enviarEmail();
              }}
              label="Enviar Email"
              variant="primary"
            />
            /
          </ModalContainer>
        </Modal>
        <Chat size={32} />
      </div>
    </TradeCardContainer>
  );
}
