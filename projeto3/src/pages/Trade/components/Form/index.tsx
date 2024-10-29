import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import { FormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { pokemonApi, PokemonType } from "../../../../api/routes/PokedexApi";
import { natureAPi, NatureProps } from "../../../../api/routes/NatureApi";
import { tradeApi } from "../../../../api/routes/TradeApi";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

type DataType = {
  name: string;
  species: string;
  ability: string;
  NatureId: number;
  type1:
    | "normal"
    | "fire"
    | "water"
    | "electric"
    | "grass"
    | "ice"
    | "fighting"
    | "poison"
    | "ground"
    | "flying"
    | "psychic"
    | "bug"
    | "rock"
    | "ghost"
    | "dragon"
    | "dark"
    | "steel"
    | "fairy";
  sex: string;
  shiny: boolean;
  UserId: number;
};

interface FormProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  fetchTradeList: () => void;
}

export function Form({ setIsOpen, isOpen, fetchTradeList }: FormProps) {
  const schema = z.object({
    name: z.string().min(1, { message: "Name Required" }),
    species: z.string().min(1, { message: "Species Required" }),
    ability: z.string().min(1, { message: "Ability Required" }),
    NatureId: z.string().min(1, { message: "Nature Required" }),
    type1: z.enum([
      "normal",
      "fire",
      "water",
      "electric",
      "grass",
      "ice",
      "fighting",
      "poison",
      "ground",
      "flying",
      "psychic",
      "bug",
      "rock",
      "ghost",
      "dragon",
      "dark",
      "steel",
      "fairy",
    ]),
    sex: z.enum(["female", "male"]),
    shiny: z.boolean(),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DataType>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (errors) {
      Object.values(errors).forEach((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
    }
  }, [errors]);

  const [abilities, setAbility] = useState([
    {
      name: "",
    },
  ]);
  const [species, setSpecies] = useState<PokemonType[]>([]);
  const [nature, setNature] = useState<NatureProps[]>([]);

  const fetchSpecies = async () => {
    const data = await pokemonApi.getPokemon({});
    setSpecies(data.data);
  };

  const fetchNature = async () => {
    const data = await natureAPi.getNatureList();
    setNature(data.data);
  };

  useEffect(() => {
    fetchSpecies();
    fetchNature();
  }, []);

  useEffect(() => {
    if (errors) {
      Object.values(errors).forEach((error) => {
        toast.error(error.message);
      });
    }
  }, [errors]);
  useEffect(() => {
    species.map((specie) => {
      if (specie.name.toLowerCase() === watch("species").toLowerCase()) {
        setAbility([
          {
            name: specie.abilityHidden,
          },
          {
            name: specie.abilityNormal,
          },
        ]);

        setValue("type1", specie.type1 as DataType["type1"]);
      }
    });
  }, [watch("species")]);

  const onSubmit = async (data: DataType) => {
    try {
      await tradeApi.registerPokemon(data);
      toast.success("Pokemon registered successfully");
      setIsOpen(!isOpen);
      fetchTradeList();
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input type="text" placeholder="Name" {...register("name")} />
      </div>
      <div>
        <label>Pokémon</label>
        <select {...register("species")}>
          <option value="" key="default">
            Select pokemon
          </option>
          {species.map((specie) => (
            <option value={specie.name} key={specie.name}>
              {specie.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Ability</label>
        <select {...register("ability")}>
          <option value="" key="default">
            Select Ability
          </option>
          {abilities.map((ability) => (
            <option value={ability.name} key={ability.name}>
              {ability.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {" "}
        <label>Nature</label>
        <select {...register("NatureId")}>
          <option value={0} key="default">
            Select Nature
          </option>
          {nature &&
            nature.map((nature) => (
              <option value={nature.id} key={nature.name}>
                {nature.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label>Sex</label>
        <select {...register("sex")}>
          <option value="" key="default">
            Select sex
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
      </div>

      <div>
        <span>
          <input type="checkbox" {...register("shiny")} />
          Shiny
        </span>
      </div>
      <div>
        <Button variant="primary" label="Register" type="submit" />
      </div>
    </FormContainer>
  );
}
