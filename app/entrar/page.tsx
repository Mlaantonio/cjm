// cjm-infocell/src/entrar/page.tsx
import React from 'react';

const EntrarPage: React.FC = () => {
  return (
    <>
        <div className="min-h-screen bg-gray-50 font-sans">
            <div>
                <h1>Entrar</h1>
                <p>Bem-vindo à página de entrada!</p>
            </div>
            {/* formulário de login*/}
            <form>
                <label>
                Email:
                <input type="email" />
                </label>
                <label>
                Senha:
                <input type="password" />
                </label>
                <button type="submit">Entrar</button>
            </form>
        </div>
    </>
  );
};

export default EntrarPage;  