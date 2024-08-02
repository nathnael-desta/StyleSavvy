<template>
    <div class="contact-all">
        <div class="contact-container">
            <div class="contact-title">Contact Us</div>
            <div class="contact-text">
                <div class="top-tiny">GET IN TOUCH</div>
                <div class="paragraph">
                    We Value The Connection With Our Community And Are Here To
                    Assist In Any Way We Can. Feel Free To Reach Out Through The
                    Following Channels:
                </div>
            </div>

            <div class="inputs-container">
                <div class="contact-name-container">
                    <input
                        type="text"
                        placeholder="Name"
                    />
                </div>
                <div class="coontact-phone-container">
                    <input
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div class="message-container">
                    <textarea
                        name=""
                        id=""
                        placeholder="Message"
                    ></textarea>
                </div>
            </div>

            <div
                class="shop contact-send"
                @click="pageNo = 1"
            >
                SEND
            </div>
        </div>
        <div class="contact-image-container">
            <img
                class="contact-img"
                src="../assets/OBJECTS.svg"
                alt=""
            />
        </div>
    </div>
</template>

<script setup></script>
