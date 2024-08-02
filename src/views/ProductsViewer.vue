<template>
    <div class="products">
        <div class="products-title">Featured Products</div>
        <div class="selection">
            <div
                class="choice"
                :class="{ selected: clothingNo == 0 }"
                @click="clothingNo = 0"
            >
                All
            </div>
            <div
                class="choice"
                :class="{ selected: clothingNo == 1 }"
                @click="clothingNo = 1"
            >
                T-Shirts
            </div>
            <div
                class="choice"
                :class="{ selected: clothingNo == 2 }"
                @click="clothingNo = 2"
            >
                Jeans
            </div>
            <div
                class="choice"
                :class="{ selected: clothingNo == 3 }"
                @click="clothingNo = 3"
            >
                Hoodies
            </div>
            <div
                class="choice"
                :class="{ selected: clothingNo == 4 }"
                @click="clothingNo = 4"
            >
                Shorts
            </div>
            <div
                class="choice"
                :class="{ selected: clothingNo == 5 }"
                @click="clothingNo = 5"
            >
                Shoes
            </div>
            <div
                class="choice"
                :class="{ selected: clothingNo == 6 }"
                @click="clothingNo = 6"
            >
                Jackets
            </div>
        </div>

        <div class="products-clothes-container">
            <div
                class="clothes clothes-product"
                v-for="(clothes, index) in chosenClothing"
            >
                <div class="products-clothes-img-container">
                    <img
                        :src="images[`clothes${index}`]"
                        alt=""
                        class="product-img"
                    />
                    <div
                        class="product-cart-container"
                        :class="{ carted: checkCarted(index) }"
                        @click="add(clothes, index)"
                    >
                        <img
                            class="product-cart"
                            src="@/assets/cart1.svg"
                            alt=""
                        />
                    </div>
                </div>

                <div class="clothes-text">{{ clothes.name }}</div>
                <div class="money">{{ clothes.price }}</div>
                <div class="sizes">
                    <div
                        class="xl"
                        :class="{ picked: sizes[clothingNo][index] == 0 }"
                        @click="sizes[clothingNo][index] = 0"
                    >
                        XL
                    </div>
                    <div
                        class="l"
                        :class="{ picked: sizes[clothingNo][index] == 1 }"
                        @click="sizes[clothingNo][index] = 1"
                    >
                        L
                    </div>
                    <div
                        class="m"
                        :class="{ picked: sizes[clothingNo][index] == 2 }"
                        @click="sizes[clothingNo][index] = 2"
                    >
                        M
                    </div>
                    <div
                        class="s"
                        :class="{ picked: sizes[clothingNo][index] == 3 }"
                        @click="sizes[clothingNo][index] = 3"
                    >
                        S
                    </div>
                    <div
                        class="xs"
                        :class="{ picked: sizes[clothingNo][index] == 4 }"
                        @click="sizes[clothingNo][index] = 4"
                    >
                        XS
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, inject, computed, onMounted } from "vue";

const data = inject("$data");

const clothingNo = inject("clothingNo");

let all = ref([]);

let tShirt = ref([]);

let shorts = ref([]);

let shoes = ref([]);

let jeans = ref([]);

let jackets = ref([]);

let hoodies = ref([]);

let allSrc = ref([]);

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

onMounted(() => {
    Object.values(data.getAllClothes()).forEach((element, index) => {
        all.value = [...all.value, ...element];
    });

    tShirt.value = [...Object.values(data.getAllClothes().tShirt)];

    shorts.value = [...Object.values(data.getAllClothes().shorts)];

    shoes.value = [...Object.values(data.getAllClothes().shoes)];

    jeans.value = [...Object.values(data.getAllClothes().jeans)];

    jackets.value = [...Object.values(data.getAllClothes().jackets)];

    hoodies.value = [...Object.values(data.getAllClothes().hoodies)];
});

let chosenClothing = computed(() => {
    if (clothingNo.value == 0) {
        return all.value;
    }
    if (clothingNo.value == 1) {
        return tShirt.value;
    }
    if (clothingNo.value == 2) {
        return jeans.value;
    }
    if (clothingNo.value == 3) {
        return hoodies.value;
    }
    if (clothingNo.value == 4) {
        return shorts.value;
    }
    if (clothingNo.value == 5) {
        return shoes.value;
    }
    if (clothingNo.value == 6) {
        return jackets.value;
    }
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

function checkCarted(index) {
    return inCart.value[clothingNo.value][index];
}



function myClothes(index) {
    if (index == 0) {
        return "@/assets/hoodies/h1.png";
    }
}

const hoodie1 = computed(() => require(`@/assets/hoodies/h1.png`));

let selection = ref(0);

const getImagePath = (src) => {
    return new URL(src, import.meta.url).href;
};

const sizes = reactive([
    [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2, 2, 2, 2, 2,
    ],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
]);

const inCart = ref([
    [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
]);

let newInCart = [];

// newInCart = [
//     ...all,
//     ...tShirt,
//     ...jeans,
//     ...hoodies,
//     ...shorts,
//     ...shoes,
//     ...jackets,
// ];

function checkInCart() {
    let newall = [];

    let newtShirt = data
        .getAllClothes()
        .tShirt.map((item) => data.isItemInCart(item.name));

    let newjeans = data
        .getAllClothes()
        .jeans.map((item) => data.isItemInCart(item.name));

    let newhoodies = data
        .getAllClothes()
        .hoodies.map((item) => data.isItemInCart(item.name));

    let newshorts = data
        .getAllClothes()
        .shorts.map((item) => data.isItemInCart(item.name));

    let newshoes = data
        .getAllClothes()
        .shoes.map((item) => data.isItemInCart(item.name));

    let newjackets = data
        .getAllClothes()
        .jackets.map((item) => data.isItemInCart(item.name));

    newall = [
        ...newhoodies,
        ...newjackets,
        ...newjeans,
        ...newshoes,
        ...newshorts,
        ...newtShirt,
    ];

    inCart.value = [
        newall,
        newtShirt,
        newjeans,
        newhoodies,
        newshorts,
        newshoes,
        newjackets,
    ];
}

let count = inject("count");

let sizeTypes = ["XL", "L", "M", "S", "XS"];

function add(clothes, index) {
    if (inCart.value[clothingNo.value][index] == false) {
        clothes.size = sizeTypes[sizes[index]];
        clothes.quantity = 1;
        clothes.clothingNo = clothingNo;
        clothes.index = index
        data.addToCart(clothes);
        count.value += 1;
    } else {
        data.removeItemByName(clothes.name);
        count.value -= 1;
    }
    inCart.value[clothingNo.value][index] =
        !inCart.value[clothingNo.value][index];
}

setInterval(() => {
    checkInCart();
}, 500);
</script>
