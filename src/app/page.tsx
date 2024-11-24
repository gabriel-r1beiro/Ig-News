'use client'
import styles from "./../style/home.module.sass";
import { SubscribeButton } from "@/components/SubscribeButton";
import { stripe } from "@/services/stripe";
import { useState } from "react";

export default function Home() {  
  const [product, setProducts] = useState({})

  const getServer = async () => {
    const price = await stripe.prices.retrieve('price_1Q1EfJIKJqwpDFUQhpJ943Z0', {
      expand: ['product']
    }) 
    const products = {
      priceId: price.id,
      amount: (price.unit_amount! / 100),
    }
    setProducts(products)
  }

  return (
    <main className={styles.contentConteiner}>
      <section className={styles.hero}>
        <span>👏 Hi, Welcome</span>
        <h1>News about the <span>React</span> World.</h1>
        <p>
          Get access to all the publications <br />
          <span>for $9.90 month</span>
        </p>
        <SubscribeButton />
      </section>
      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  );
};