import { CardTradeContainer, CardTradeContent } from "./styles";

interface CardTradeProps {
  color: string;
  nature: string;
  ability: string;
  userName: string;
  userEmail: string;
  species: string;
}

export function CardTrade({
  color,
  nature,
  ability,
  userName,
  userEmail,
  species,
}: CardTradeProps) {
  return (
    <>
      <CardTradeContainer $color={color}>
        <CardTradeContent>
          <img
            src="https://pm1.aminoapps.com/6434/a5f7322cdf21c4de36c7e2c48c926e4c433fe5e4_hq.jpg"
            alt=""
          />
          <div>
            <p>Nature: {nature}</p>
            <p>Ability: {ability}</p>
            <p>Species: {species}</p>
            <p>User name: {userName}</p>
            <p>User email: {userEmail}</p>
          </div>
        </CardTradeContent>
        <div>
          <button>Ação1</button>
          <button>Ação2</button>
        </div>
      </CardTradeContainer>
    </>
  );
}
