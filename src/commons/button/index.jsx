import React, { useState, useEffect } from "react";

import "./styles.css";

const Button = ({ counts, setCurrent }) => {
  const [totalCounts] = useState(counts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const [nextPage, setNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = totalCounts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (currentPosts[currentPosts.length - 1].n !== counts[counts.length - 1].n) setNextPage(true);
    else setNextPage(false);
    
    if (currentPosts[0].n !== counts[0].n) setPrevPage(true);
    else setPrevPage(false);
  }, [currentPage]);

  const setPage = (page) => {
    setCurrentPage(page);
    setPostsPerPage(4);
  }

  return (
    <div className="container_buttons" data-testid="testId">
      {prevPage && (
        <div className="big-button bg-green" onClick={() => setPage(currentPage - 1)}>
          <h4>{'<<'} Opciones anteriores</h4>
        </div>
      )}
      {currentPosts.map((count, i) => (
        <div className="big-button bg-green" key={i} onClick={() => setCurrent(count)}>
          {count.tipo_letras === "CC" || count.tipo_letras === "Cc" ? <h4>Cuenta corriente</h4> : <h4>Caja de ahorro</h4>}
          <span>Nro: {count.n}</span>
        </div>
      ))}
      {nextPage && (
        <div className="big-button bg-green" onClick={() => setPage(currentPage + 1)}>
          <h4>Mas opciones {'>>'}</h4>
        </div>
      )}
    </div>
  );
};

export default Button;
