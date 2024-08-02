<template>
    <div class="home-container">
        <div class="top">
            <div class="top-text">
                <div class="big">Nothing But Qualities</div>
                <div class="small">
                    We sell quality jeans, shirts, sweaters and a lot more
                </div>
                <router-link
                    class="shop"
                    :to="`/products`"
                    @click="pageNo = 1"
                    >Shop Now</router-link
                >
            </div>
            <div class="top-image">
                <img
                    class="home1"
                    src="../assets/home1.svg"
                    alt=""
                />
            </div>
        </div>
        <div class="popular">
            <div class="title">Most Popular</div>
            <div class="clothes-container">
                <div class="clothes">
                    <div class="clothes-img-container">
                        <img
                            :src="hoodieImage1"
                            alt=""
                            class="myImage"
                        />
                        <div
                            class="cart-container"
                            :class="{ carted: inCart[0] }"
                            @click="add(data.getAllPopular()[0], 0, 0)"
                        >
                            <img
                                class="cart"
                                src="@/assets/cart1.svg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div class="clothes-text">
                        {{ data.getAllPopular()[0].name }}
                    </div>
                    <div class="money">{{ data.getAllPopular()[0].price }}</div>
                    <div class="sizes">
                        <div
                            class="xl"
                            :class="{ picked: sizes[0] == 0 }"
                            @click="sizes[0] = 0"
                        >
                            XL
                        </div>
                        <div
                            class="l"
                            :class="{ picked: sizes[0] == 1 }"
                            @click="sizes[0] = 1"
                        >
                            L
                        </div>
                        <div
                            class="m"
                            :class="{ picked: sizes[0] == 2 }"
                            @click="sizes[0] = 2"
                        >
                            M
                        </div>
                        <div
                            class="s"
                            :class="{ picked: sizes[0] == 3 }"
                            @click="sizes[0] = 3"
                        >
                            S
                        </div>
                        <div
                            class="xs"
                            :class="{ picked: sizes[0] == 4 }"
                            @click="sizes[0] = 4"
                        >
                            XS
                        </div>
                    </div>
                </div>
                <div class="clothes">
                    <div class="clothes-img-container">
                        <img
                            :src="tShirtImage1"
                            alt=""
                            class="myImage"
                        />
                        <div
                            class="cart-container"
                            :class="{ carted: inCart[1] }"
                            @click="add(data.getAllPopular()[1], 1, 0)"
                        >
                            <img
                                class="cart"
                                src="@/assets/cart1.svg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div class="clothes-text">
                        {{ data.getAllPopular()[1].name }}
                    </div>
                    <div class="money">{{ data.getAllPopular()[1].price }}</div>
                    <div class="sizes">
                        <div
                            class="xl"
                            :class="{ picked: sizes[1] == 0 }"
                            @click="sizes[1] = 0"
                        >
                            XL
                        </div>
                        <div
                            class="l"
                            :class="{ picked: sizes[1] == 1 }"
                            @click="sizes[1] = 1"
                        >
                            L
                        </div>
                        <div
                            class="m"
                            :class="{ picked: sizes[1] == 2 }"
                            @click="sizes[1] = 2"
                        >
                            M
                        </div>
                        <div
                            class="s"
                            :class="{ picked: sizes[1] == 3 }"
                            @click="sizes[1] = 3"
                        >
                            S
                        </div>
                        <div
                            class="xs"
                            :class="{ picked: sizes[1] == 4 }"
                            @click="sizes[1] = 4"
                        >
                            XS
                        </div>
                    </div>
                </div>
                <div class="clothes">
                    <div class="clothes-img-container">
                        <img
                            :src="shoesImage1"
                            alt=""
                            class="myImage"
                        />
                        <div
                            class="cart-container"
                            :class="{ carted: inCart[2] }"
                            @click="add(data.getAllPopular()[2], 5, 0)"
                        >
                            <img
                                class="cart"
                                src="@/assets/cart1.svg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div class="clothes-text">
                        {{ data.getAllPopular()[2].name }}
                    </div>
                    <div class="money">{{ data.getAllPopular()[2].price }}</div>
                    <div class="sizes">
                        <div
                            class="xl"
                            :class="{ picked: sizes[2] == 0 }"
                            @click="sizes[2] = 0"
                        >
                            XL
                        </div>
                        <div
                            class="l"
                            :class="{ picked: sizes[2] == 1 }"
                            @click="sizes[2] = 1"
                        >
                            L
                        </div>
                        <div
                            class="m"
                            :class="{ picked: sizes[2] == 2 }"
                            @click="sizes[2] = 2"
                        >
                            M
                        </div>
                        <div
                            class="s"
                            :class="{ picked: sizes[2] == 3 }"
                            @click="sizes[2] = 3"
                        >
                            S
                        </div>
                        <div
                            class="xs"
                            :class="{ picked: sizes[2] == 4 }"
                            @click="sizes[2] = 4"
                        >
                            XS
                        </div>
                    </div>
                </div>
                <div class="clothes">
                    <div class="clothes-img-container">
                        <img
                            :src="hoodieImage2"
                            alt=""
                            class="myImage"
                        />
                        <div
                            class="cart-container"
                            :class="{ carted: inCart[3] }"
                            @click="add(data.getAllPopular()[3], 3, 1)"
                        >
                            <img
                                class="cart"
                                src="@/assets/cart1.svg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div class="clothes-text">
                        {{ data.getAllPopular()[3].name }}
                    </div>
                    <div class="money">{{ data.getAllPopular()[3].price }}</div>
                    <div class="sizes">
                        <div
                            class="xl"
                            :class="{ picked: sizes[3] == 0 }"
                            @click="sizes[3] = 0"
                        >
                            XL
                        </div>
                        <div
                            class="l"
                            :class="{ picked: sizes[3] == 1 }"
                            @click="sizes[3] = 1"
                        >
                            L
                        </div>
                        <div
                            class="m"
                            :class="{ picked: sizes[3] == 2 }"
                            @click="sizes[3] = 2"
                        >
                            M
                        </div>
                        <div
                            class="s"
                            :class="{ picked: sizes[3] == 3 }"
                            @click="sizes[3] = 3"
                        >
                            S
                        </div>
                        <div
                            class="xs"
                            :class="{ picked: sizes[3] == 4 }"
                            @click="sizes[3] = 4"
                        >
                            XS
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="services">
            <div class="service">
                <img
                    src="@/assets/lock1.svg"
                    alt="lock"
                />
                <div class="texts">
                    <div class="bigger">Free Shipping</div>
                    <div class="smaller">
                        Shop with confidence knowing that all your transactions
                        are safeguarded
                    </div>
                </div>
            </div>
            <div class="service">
                <img
                    src="@/assets/bus1.svg"
                    alt="lock"
                    class="bus"
                />
                <div class="texts">
                    <div class="bigger">Secure Payments</div>
                    <div class="smaller">
                        Shopping with no extra charges - savor the liberty of
                        complimentary shipping on every order
                    </div>
                </div>
            </div>
            <div class="service">
                <img
                    src="@/assets/redo1.svg"
                    alt="lock"
                    class="redo"
                />
                <div class="texts">
                    <div class="bigger">Easy Returns</div>
                    <div class="smaller">
                        with our hassle-free Easy Returns, changing your mind
                        has never been more convenient
                    </div>
                </div>
            </div>
            <div class="service">
                <img
                    src="@/assets/pin1.svg"
                    alt="lock"
                />
                <div class="texts">
                    <div class="bigger">Order Tracking</div>
                    <div class="smaller">
                        Stay in the loop with or Order Tracing feature - from
                        checkout to your doorstep.
                    </div>
                </div>
            </div>
        </div>
        <div class="offer">
            <div class="offer-text">
                <div class="special">SPECIAL OFFER</div>
                <div class="percent">Up to 30% OFF</div>
                <div
                    class="shop"
                    :to="`/products`"
                    @click="pageNo = 1"
                >
                    Shop Now
                </div>
            </div>
            <div class="offer-img-container">
                <img
                    src="@/assets/home3.svg"
                    alt="offer image"
                />
            </div>
        </div>
        <div class="testimonials">
            <div class="title">Testimonials</div>
            <div class="pictures">
                <div
                    class="picture"
                    :class="{ chosen: testimonials[0] }"
                    @click="changeToTestimonial(0)"
                >
                    <img
                        src="@/assets/t1.jpg"
                        alt=""
                    />
                </div>
                <div
                    class="picture"
                    :class="{ chosen: testimonials[1] }"
                    @click="changeToTestimonial(1)"
                >
                    <img
                        src="@/assets/t2.jpg"
                        alt=""
                    />
                </div>
                <div
                    class="picture"
                    :class="{ chosen: testimonials[2] }"
                    @click="changeToTestimonial(2)"
                >
                    <img
                        src="@/assets/t3.jpg"
                        alt=""
                    />
                </div>
                <div
                    class="picture"
                    :class="{ chosen: testimonials[3] }"
                    @click="changeToTestimonial(3)"
                >
                    <img
                        src="@/assets/t4.png"
                        alt=""
                    />
                </div>
                <div
                    class="picture"
                    :class="{ chosen: testimonials[4] }"
                    @click="changeToTestimonial(4)"
                >
                    <img
                        src="@/assets/t5.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div class="stars">
                <img
                    src="@/assets/star1.svg"
                    alt=""
                />
                <img
                    src="@/assets/star1.svg"
                    alt=""
                />
                <img
                    src="@/assets/star1.svg"
                    alt=""
                />
                <img
                    src="@/assets/star1.svg"
                    alt=""
                />
                <img
                    src="@/assets/star1.svg"
                    alt=""
                />
            </div>
            <div class="comment">
                {{ comments[commentIndex] }}
            </div>
        </div>
        <div class="bottom">
            <div class="about">
                <div class="about-title">StyleSavvy</div>
                <div class="about-text">
                    StyleSavvy is your destination for timeless fashion. We
                    believe that clothes should make you feel confident and
                    empowered. Discover your new favorite pieces today.
                </div>
            </div>
            <div class="tab">
                <div class="name">Infromation</div>
                <div class="sub">
                    <div class="">About me</div>
                    <div class="">My Story</div>
                    <div class="">Awards and acheivments</div>
                    <div class="">Contact</div>
                </div>
            </div>
            <div class="tab">
                <div class="name">Descovery</div>
                <div class="sub">
                    <div class="">Jeans</div>
                    <div class="">T-shirts</div>
                    <div class="">Shorts</div>
                    <div class="">Jackets</div>
                    <div class="">Hoodies</div>
                    <div class="">Shoes</div>
                </div>
            </div>
            <div class="tab">
                <div class="name">Locate Us</div>
                <div class="sub">
                    <div class="">123 Demo Blvd, Miami, FL4567</div>
                    <div class="">United States</div>
                    <div class="">+1 123-456-7890</div>
                    <div class="">mail@example.com</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, inject, computed } from "vue";

let pageNo = inject("pageNo");

const data = inject("$data");

const hoodieImage1 = getClothes("hoodies", "1");
const shoesImage1 = getClothes("shoes", "1");
const shortsImage1 = getClothes("shorts", "1");
const tShirtImage1 = getClothes("tShirt", "1");
const jeansImage1 = getClothes("jeans", "1");
const hoodieImage2 = getClothes("hoodies", "2");

const popular = [];

function getClothes(type, number) {
    computed(() => require("@/assets/hoodies/h1.png"));
    // const prefix = ? "h" : type == "jackets" ? "ja" : type == "jeans" ? "j" : type == "shoes" ? "sh" : type == "shorts" ? "s" : type == "tShirt" ? "ts";
    let prefix = "";

    if (type == "hoodies") {
        prefix = "h";
    } else if (type == "jackets") {
        prefix = "ja";
    } else if (type == "jeans") {
        prefix = "j";
    } else if (type == "shoes") {
        prefix = "sh";
    } else if (type == "shorts") {
        prefix = "s";
    } else if (type == "tShirt") {
        prefix = "ts";
    }

    const clothes = computed(() =>
        require(`@/assets/${type}/${prefix}${number}.png`)
    );

    return clothes;
}

const sizes = reactive([2, 2, 2, 2]);
let inCart = ref([false, false, false, false]);

let testimonials = reactive([false, false, true, false, false]);

const comments = data.getAllComments();
let commentIndex = 3;

console.log(data.getAllClothes().hoodies[0].src);

function changeToTestimonial(index) {
    for (let i = 0; i < 5; i++) {
        testimonials[i] = false;
    }

    testimonials[index] = true;
    commentIndex = index;
}

let count = inject("count");

let sizeTypes = ["XL", "L", "M", "S", "XS"];

function add(clothes, index, actualIndex) {
    if (!data.isItemInCart(clothes.name)) {
        clothes.size = sizeTypes[sizes[index]];
        clothes.quantity = 1;
        data.addToCart(clothes);
        clothes.clothingNo = index;
        clothes.index = actualIndex;
        count.value += 1;
    } else {
        data.removeItemByName(clothes.name);
        count.value -= 1;
    }

    inCart[index] = !inCart[index];
}

function checkInCart() {
    let newCart = data
        .getAllPopular()
        .map((item) => data.isItemInCart(item.name));
    inCart.value = newCart;
}

function isItemInCart(index) {
    return data.isItemInCart(data.getAllPopular()[index].name);
}

setInterval(() => {
    checkInCart();
}, 200);
</script>
