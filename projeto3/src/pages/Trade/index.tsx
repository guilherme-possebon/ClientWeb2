import { useEffect, useState } from "react";
import { CardTrade } from "./components/CardTrade";
import { TradeContainer } from "./styles";
import { TradeApi, TradeListProps } from "../../api/routes/TradeApi";

export function Trade() {
  const [tradeList, setTradeList] = useState<TradeListProps[]>([]);

  useEffect(() => {
    getTrdeList();
  }, [tradeList]);

  const getTrdeList = async () => {
    const response = await TradeApi.getTradeList();
    setTradeList(response.data);
  };
  return (
    <>
      <TradeContainer>
        {tradeList.length > 0 ? (
          tradeList.map((trade) => (
            <div>
              <CardTrade
                key={trade.id}
                color={trade.type1}
                nature={trade.Nature?.name}
                ability={trade.ability}
                userName={trade.User?.name}
                userEmail={trade.User?.email}
                species={trade.species}
              />
            </div>
          ))
        ) : (
          <div>
            <span>Loading</span>
          </div>
        )}
      </TradeContainer>
    </>
  );
}
