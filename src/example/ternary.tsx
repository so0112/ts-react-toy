import React from 'react';

// 상수 영역

const flag = true;
const flag2 = true;
const flag3 = true;
const flag4 = true;
const flag5 = true;

// 삼항연산자 렌더링
const TernaryComponent = () => {
  return (
    <div>
      {flag && flag2 && !flag3 ? (
        flag4 ? (
          <p>Blah</p>
        ) : flag5 ? (
          <p>Meh</p>
        ) : (
          <p>Herp</p>
        )
      ) : (
        <p>Derp</p>
      )}
    </div>
  );
};

// && 연산자 렌더링
const AndOperationComponent = () => {
  return (
    <div>
      {(() => {
        if (flag && flag2 && !flag3) {
          if (flag4) {
            return <p>Blah</p>;
          } else if (flag5) {
            return <p>Meh</p>;
          } else {
            return <p>Herp</p>;
          }
        } else {
          return <p>Derp</p>;
        }
      })()}
    </div>
  );
};

// If 렌더링
const IfStateComponent = () => {
  const basicCondition = flag && flag2 && !flag3;
  if (!basicCondition) return <p>Derp</p>;
  if (flag4) return <p>Blah</p>;
  if (flag5) return <p>Meh</p>;
  return <p>Herp</p>;
};

type Props = {};

const ternary = (props: Props) => {
  return (
    <>
      <TernaryComponent />
      <AndOperationComponent />
      <IfStateComponent />
    </>
  );
};

export default ternary;
