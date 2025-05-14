interface ListaCataProps {
  CardV: string[];
}

function ListaCata({ CardV }: ListaCataProps) {
  return (
    <>
      {CardV.length > 0 ? (
        CardV.map((id, index) => <p key={index}>{id}</p>)
      ) : (
        <p>Não há jogos cadastrados</p>
      )}
    </>
  );
}

export default ListaCata;
