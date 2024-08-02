<template>
    <div class="checkout-title">Checkout</div>
    <div class="checkout-container">
        <div class="billing-container">
            <div class="billing-title">Billing Details</div>
            <div class="inputs-container">
                <div class="names">
                    <div class="first-container">
                        <label for="">First name</label>
                        <input type="text" />
                    </div>
                    <div class="last-container">
                        <label for="">Last name</label>
                        <input type="text" />
                    </div>
                </div>
                <div class="country-container">
                    <label for="">Country</label>
                    <input type="text" />
                </div>
                <div class="phone-container">
                    <label for="">Phone</label>
                    <input type="text" />
                </div>
                <div class="order-notes">
                    <label for="">Order notes</label>
                    <textarea
                        name=""
                        id=""
                    ></textarea>
                </div>
            </div>
        </div>
        <div class="order-container">
            <div class="order-title">Your Order</div>
            <div class="columns">
                <div class="products-col">Product</div>
                <div class="order-subtotal">Subtotal</div>
            </div>
            <div class="order-item-container">
                <div
                    class="order-item"
                    v-for="(item, index) in allCart"
                >
                    <div class="order-name">
                        <div class="order-name-actual">
                            {{ item.name }}
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="multiply"
                        >
                            <title>close-thick</title>
                            <path
                                d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
                            />
                        </svg>
                        <div class="amount">{{ item.quantity }}</div>
                    </div>
                    <div class="order-price">{{ item.price }}</div>
                </div>
            </div>
            <div class="order-total">
                <div class="total-title">Total</div>
                <div class="order-total-amount">{{ total }}</div>
            </div>
            <div class="payment-container">
                <div class="payment-methods">
                    <img
                        src="../assets/Abbyssiniya.svg"
                        alt=""
                        :class="{ myPayment: payments == 0 }"
                        @click="payments = 0"
                    />
                    <img
                        src="../assets/bank.svg"
                        alt=""
                        :class="{ myPayment: payments == 1 }"
                        @click="payments = 1"
                    />
                    <img
                        src="../assets/CBE.svg"
                        alt=""
                        :class="{ myPayment: payments == 2 }"
                        @click="payments = 2"
                    />
                    <img
                        src="../assets/cbebirr.svg"
                        alt=""
                        :class="{ myPayment: payments == 3 }"
                        @click="payments = 3"
                    />
                    <img
                        src="../assets/telebirr.svg"
                        alt=""
                        :class="{ myPayment: payments == 4 }"
                        @click="payments = 4"
                    />
                </div>
            </div>
            <div class="place-order">Place Order</div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, inject } from "vue";

const data = inject("$data");

let allCart = reactive(data.getAllCart());

let payments = ref(6);

let total = ref(totalAmount());

function totalAmount() {
    let prices = allCart.map((item) => parseFloat(item.price.split("$")[1]));
    let totalPrice = prices.reduce((price, acc) => {
        return parseFloat(price) + acc;
    }, 0);

    // Use toFixed(2) to limit decimal places to 2
    return `$${totalPrice.toFixed(2)}`;
}

setInterval(() => {
    total.value = totalAmount();
}, 500);
</script>
