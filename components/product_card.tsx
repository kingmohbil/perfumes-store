import Image from 'next/image';
import StyledCard from './styles/styled_card';

type CardProps = {
  event?: () => void;
};
export default function Card({ event = () => {} }: CardProps) {
  return (
    <>
      <StyledCard onMouseOver={event}>
        <Image
          src="/images/CoolWater.jpeg"
          height="200"
          width="200"
          alt="cool water perfume"
        />
        <div className="card-details">
          <h2 className="card-title">Cool Water</h2>
          <p className="card-description">
            Cool Water is a perfume by DAVIDOFF it`s best used in winter
            occasions.
          </p>
          <hr />
          <div className="card-actions">
            <h3 className="card-price">$200</h3>
            <div className="card-buttons"></div>
          </div>
        </div>
      </StyledCard>
    </>
  );
}
