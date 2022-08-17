import React from 'react';

interface BooksProps {
  title: string;
}

const Books: React.FC = () => {
  const data: any = [];

  return (
    <div>
      <h1 className="text-3xl font-bold underline animate-pulse text-lime-300">
        BOOKS
      </h1>
      {data.length && (
        <>
          {data.map((item: any): any => {
            return (
              <div>
                <h1>{item}</h1>
                <p>Tem conteúdo</p>
              </div>
            );
          })}
          <p>
            <button type="button">finalizar pedido</button>
          </p>
        </>
      )}

      {!data.length && (
        <div>
          <p>Carrinho fazio.</p>
        </div>
      )}
    </div>
  );
};

export default Books;
