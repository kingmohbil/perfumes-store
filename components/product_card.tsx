import Image from 'next/image';
import Link from 'next/link';
import StyledCard from './styles/styled_card';

export default function Card() {
  return (
    <>
      <StyledCard>
        <Link href="#">
          <Image
            src="/images/CoolWater.jpeg"
            height="200"
            width="200"
            alt="cool water perfume"
          />
        </Link>
        <div className="card-details">
          <h2 className="card-title">Cool Water</h2>
          <p className="card-description">
            Cool Water is a perfume by DAVIDOFF it`s best used in winter
            occasions.
          </p>
          <div className="card-actions">
            <h3 className="card-price">$200</h3>
            <div className="card-buttons">
              <button className="cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </StyledCard>
    </>
  );
}
