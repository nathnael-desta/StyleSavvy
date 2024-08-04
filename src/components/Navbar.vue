<template>
    <div class="nav-container">
        <div class="shop-title">StyleSavvy</div>
        <div
            class="dropdown-content"
            :class="{ shown: dropdown }"
        >
            <div class="navs">
                <router-link
                    class="home"
                    activeClass="notColored"
                    exact-active-class="normal"
                    :to="`/`"
                    :class="{ chosenPage: pageNo == 0 }"
                    @click="linkClickAction(0)"
                    
                    >Home</router-link
                >
                <router-link
                    class="products-nav"
                    activeClass="notColored"
                    exact-active-class="normal"
                    :to="`/products`"
                    :class="{ chosenPage: pageNo == 1 }"
                    @click="linkClickAction(0)"
                    >Products</router-link
                >
                <router-link
                    class="contact"
                    activeClass="notColored"
                    exact-active-class="normal"
                    :to="`/contacts`"
                    :class="{ chosenPage: pageNo == 2 }"
                    @click="linkClickAction(0)"
                    >Contact Us</router-link
                >
            </div>
            <div
                class="cart"
                @click="cartClickAction()"
            >
                <img
                    src="../assets/cart.svg"
                    alt="cart"
                />
                <div
                    class="count"
                    :class="{ two: data.getAllCart().length > 9 }"
                >
                    {{ count }}
                </div>
            </div>
            <svg
                class="close"
                @click="dropdown = false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <title>close</title>
                <path
                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
            </svg>
        </div>
        <div
            class="dropdown"
            :class="{ shown: !dropdown }"
            @click="dropdown = true"
        >
            <svg
                class="dropdown-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <title>tally-mark-3</title>
                <path d="M9 19H7V5H9V19M13 5H11V19H13V5M17 5H15V19H17V5Z" />
            </svg>
        </div>
    </div>
    <div
        class="cart-sidebar"
        :class="{ cartOpened: cartOpen, cartClosed: !cartOpen }"
        @click="cartOpen = false"
    >
        <div
            class="cart-sidebar-container"
            @click="inside()"
        >
            <div class="cart-top">
                <div class="cart-tittle">Shopping Cart</div>
                <svg
                    class="cart-close"
                    @click="cartOpen = false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <title>close</title>
                    <path
                        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                </svg>
            </div>
            <div class="cart-content">
                <div
                    class="cart-item"
                    v-for="(item, index) in allCart"
                >
                    <div class="item-image">
                        <img
                            :src="
                                clothingType[item.clothingNo][
                                    `clothes${
                                        item.index
                                    }`
                                ]
                            "
                            alt=""
                        />
                    </div>
                    <div class="item-details">
                        <div class="item-name">
                            {{ item.name }}
                        </div>
                        <div class="middle">
                            <div class="size-text">Size:</div>
                            <div class="item-size">{{ item.size }}</div>
                            <div class="item-quantity">
                                <div
                                    class="minus"
                                    @click="minus(item)"
                                >
                                    -
                                </div>
                                <input
                                    type="number"
                                    class="quantity"
                                    v-model="item.quantity"
                                />
                                <div
                                    class="plus"
                                    @click="plus(item)"
                                >
                                    +
                                </div>
                            </div>
                        </div>
                        <div class="item-total">
                            <div class="chosen-quantity">1</div>
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
                            <div class="item-price">{{ item.price }}</div>
                        </div>
                    </div>
                    <div class="delete-item">
                        <svg
                            class="delete-svg"
                            @click="deleteItem(item.name)"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <title>close</title>
                            <path
                                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="subtotal">
                <div class="subtotal-text">Subtotal:</div>
                <div class="total">{{ total }}</div>
            </div>
            <router-link
                class="checkout"
                :to="`/checkout`"
                @click="goToCheckout()"
            >
                <div class="checkout-button">CHECKOUT</div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, reactive, computed, watch } from "vue";

let pageNo = inject("pageNo");

const data = inject("$data");

let count = inject("count");

let dropdown = ref(false);

let cartOpen = inject("cartOpen");

let allCart = reactive(data.getAllCart());

let total = ref(totalAmount());

function cartClickAction() {
    cartOpen.value = true;
    dropdown.value = false;
}

function linkClickAction(index) {
    pageNo.value = index;
    dropdown.value = false 
}

function chosenImg(item) {
    console.log(
        clothingType.value[item.clothingNo][
            `clothes${parseInt(item.src.charAt(item.src.length - 5), 10) - 1}`
        ],
        "..........................."
    );
    clothingType.value[item.clothingNo][
        `clothes${parseInt(item.src.charAt(item.src.length - 5), 10) - 1}`
    ];
}

function getImage(item) {
    console.log("src is", item.src.charAt(item.src.length - 5));
    return images[
        `clothes${parseInt(item.src.charAt(item.src.length - 5), 10) - 1}`
    ];
}

function totalAmount() {
    let prices = allCart.map((item) => parseFloat(item.price.split("$")[1]));
    let totalPrice = prices.reduce((price, acc) => {
        return parseFloat(price) + acc;
    }, 0);

    // Use toFixed(2) to limit decimal places to 2
    return `$${totalPrice.toFixed(2)}`;
}

function inside() {
    event.stopPropagation();
}

function deleteItem(name) {
    count.value -= 1;
    console.log("before", [...data.getAllCart()]);
    data.removeItemByName(name);
    console.log("after", [...data.getAllCart()]);
}

function goToCheckout() {
    cartOpen.value = false;
    pageNo.value = 4;
}

function minus(item) {
    if (item.quantity > 1) {
        return (item.quantity -= 1);
    }
}

function plus(item) {
    item.quantity += 1;
}

const clothingNo = inject("clothingNo");

let mySrc = reactive({
    clothes0: computed(() => require(`@/assets/hoodies/h1.png`)),
    clothes1: computed(() => require(`@/assets/hoodies/h2.png`)),
    clothes2: computed(() => require(`@/assets/hoodies/h3.png`)),
    clothes3: computed(() => require(`@/assets/hoodies/h4.png`)),
    clothes4: computed(() => require(`@/assets/hoodies/h5.png`)),
    clothes5: computed(() => require(`@/assets/hoodies/h6.png`)),
    clothes6: computed(() => require(`@/assets/jackets/ja1.png`)),
    clothes7: computed(() => require(`@/assets/jackets/ja2.png`)),
    clothes8: computed(() => require(`@/assets/jackets/ja3.png`)),
    clothes9: computed(() => require(`@/assets/jackets/ja4.png`)),
    clothes10: computed(() => require(`@/assets/jackets/ja5.png`)),
    clothes11: computed(() => require(`@/assets/jackets/ja6.png`)),
    clothes12: computed(() => require(`@/assets/jeans/j1.png`)),
    clothes13: computed(() => require(`@/assets/jeans/j2.png`)),
    clothes14: computed(() => require(`@/assets/jeans/j3.png`)),
    clothes15: computed(() => require(`@/assets/jeans/j4.png`)),
    clothes16: computed(() => require(`@/assets/jeans/j5.png`)),
    clothes17: computed(() => require(`@/assets/jeans/j6.png`)),
    clothes18: computed(() => require(`@/assets/shoes/sh1.png`)),
    clothes19: computed(() => require(`@/assets/shoes/sh2.png`)),
    clothes20: computed(() => require(`@/assets/shoes/sh3.png`)),
    clothes21: computed(() => require(`@/assets/shoes/sh4.png`)),
    clothes22: computed(() => require(`@/assets/shoes/sh5.png`)),
    clothes23: computed(() => require(`@/assets/shoes/sh6.png`)),
    clothes24: computed(() => require(`@/assets/shorts/s1.png`)),
    clothes25: computed(() => require(`@/assets/shorts/s2.png`)),
    clothes26: computed(() => require(`@/assets/shorts/s3.png`)),
    clothes27: computed(() => require(`@/assets/shorts/s4.png`)),
    clothes28: computed(() => require(`@/assets/shorts/s5.png`)),
    clothes29: computed(() => require(`@/assets/shorts/s6.png`)),
    clothes30: computed(() => require(`@/assets/tShirt/ts1.png`)),
    clothes31: computed(() => require(`@/assets/tShirt/ts2.png`)),
    clothes32: computed(() => require(`@/assets/tShirt/ts3.png`)),
    clothes33: computed(() => require(`@/assets/tShirt/ts4.png`)),
    clothes34: computed(() => require(`@/assets/tShirt/ts5.png`)),
    clothes35: computed(() => require(`@/assets/tShirt/ts6.png`)),
});

let tShirtImgs = reactive({
    clothes0: computed(() => require(`@/assets/tShirt/ts1.png`)),
    clothes1: computed(() => require(`@/assets/tShirt/ts2.png`)),
    clothes2: computed(() => require(`@/assets/tShirt/ts3.png`)),
    clothes3: computed(() => require(`@/assets/tShirt/ts4.png`)),
    clothes4: computed(() => require(`@/assets/tShirt/ts5.png`)),
    clothes5: computed(() => require(`@/assets/tShirt/ts6.png`)),
});

let shoesImgs = reactive({
    clothes0: computed(() => require(`@/assets/shoes/sh1.png`)),
    clothes1: computed(() => require(`@/assets/shoes/sh2.png`)),
    clothes2: computed(() => require(`@/assets/shoes/sh3.png`)),
    clothes3: computed(() => require(`@/assets/shoes/sh4.png`)),
    clothes4: computed(() => require(`@/assets/shoes/sh5.png`)),
    clothes5: computed(() => require(`@/assets/shoes/sh6.png`)),
});

let shortsImgs = reactive({
    clothes0: computed(() => require(`@/assets/shorts/s1.png`)),
    clothes1: computed(() => require(`@/assets/shorts/s2.png`)),
    clothes2: computed(() => require(`@/assets/shorts/s3.png`)),
    clothes3: computed(() => require(`@/assets/shorts/s4.png`)),
    clothes4: computed(() => require(`@/assets/shorts/s5.png`)),
    clothes5: computed(() => require(`@/assets/shorts/s6.png`)),
});

let jacketsImgs = reactive({
    clothes0: computed(() => require(`@/assets/jackets/ja1.png`)),
    clothes1: computed(() => require(`@/assets/jackets/ja2.png`)),
    clothes2: computed(() => require(`@/assets/jackets/ja3.png`)),
    clothes3: computed(() => require(`@/assets/jackets/ja4.png`)),
    clothes4: computed(() => require(`@/assets/jackets/ja5.png`)),
    clothes5: computed(() => require(`@/assets/jackets/ja6.png`)),
});

let jeansImgs = reactive({
    clothes0: computed(() => require(`@/assets/jeans/j1.png`)),
    clothes1: computed(() => require(`@/assets/jeans/j2.png`)),
    clothes2: computed(() => require(`@/assets/jeans/j3.png`)),
    clothes3: computed(() => require(`@/assets/jeans/j4.png`)),
    clothes4: computed(() => require(`@/assets/jeans/j5.png`)),
    clothes5: computed(() => require(`@/assets/jeans/j6.png`)),
});

let hoodiesImgs = reactive({
    clothes0: computed(() => require(`@/assets/hoodies/h1.png`)),
    clothes1: computed(() => require(`@/assets/hoodies/h2.png`)),
    clothes2: computed(() => require(`@/assets/hoodies/h3.png`)),
    clothes3: computed(() => require(`@/assets/hoodies/h4.png`)),
    clothes4: computed(() => require(`@/assets/hoodies/h5.png`)),
    clothes5: computed(() => require(`@/assets/hoodies/h6.png`)),
});

let images = computed(() => {
    if (clothingNo.value == 0) {
        return mySrc;
    }
    if (clothingNo.value == 1) {
        return tShirtImgs;
    }
    if (clothingNo.value == 2) {
        return jeansImgs;
    }
    if (clothingNo.value == 3) {
        return hoodiesImgs;
    }
    if (clothingNo.value == 4) {
        return shortsImgs;
    }
    if (clothingNo.value == 5) {
        return shoesImgs;
    }
    if (clothingNo.value == 6) {
        return jacketsImgs;
    }
});

let clothingType = ref([
    mySrc,
    tShirtImgs,
    jeansImgs,
    hoodiesImgs,
    shortsImgs,
    shoesImgs,
    jacketsImgs,
]);

setInterval(() => {
    total.value = totalAmount();
}, 500);
</script>
