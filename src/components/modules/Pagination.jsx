import { useState } from "react";

const Pagination = () => {
  
    const [page, setPage] = useState(1);

    const preHandler = () => {
        if(page <= 1) return;
        setPage((page) => page - 1)
    }

    const nextHandler = () => {
        if(page >= 20) return;
        setPage((page) => page + 1)
    }

  return (
    <div>
      <button onClick={preHandler}>Previous</button>
      <p>{page}</p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
};

export default Pagination;
