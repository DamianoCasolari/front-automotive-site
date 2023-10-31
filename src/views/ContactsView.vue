<script>
import axios from 'axios';

export default {
    data() {


        return {
            name: '',
            phone_number: '',
            message: '',
            email: '',
            errors: {},
            loading: false,
            success: false
        }
    },
    methods: {
        submitForm() {
            this.loading = true;
            const data = {
                name: this.name,
                phone_number: this.phone_number,
                email: this.email,
                message: this.message,
            }
            this.errors = {}
            axios.post('http://127.0.0.1:8000/api/contacts', data).then(response => {
                console.log(response);
                if (!response.data.success) {
                    this.errors = response.data.errors
                } else {
                    this.name = ''
                    this.phone_number = ''
                    this.message = ''
                    this.email = ''
                    this.success = true

                }
                this.loading = false;

            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
<template>
    <div class=" vh100_no_header_footer_min overflow-hidden position-relative">
        <div class=" d-flex h-100 w-100 align-items-center justify-content-center text_cloudy overflow-hidden">
            <div class="vh100_no_header_footer_min contacts_container d-flex flex-column justify-content-center align-items-center z-2 flex-wrap h-100 w-100 overflow-hidden"
                v-if="!success && !loading">
                <div
                    class="telephone_email_container h-100 px-5 pt-5 pb-3 col-12 d-flex flex-column align-items-center justify-content-center">

                    <div class="text_light_gradient h2 poppins">+39 348 8945213</div>
                    <div class="text_light_gradient h2 "> onetwothree@gmail.com</div>
                </div>

                <div class="form_container col-12 h-100 p-5 ">
                    <h4 class=" fw-semibold mb-3 text-center text_light_gradient"> ...oppure
                        compila il modulo e <strong class="text-white">verrai ricontattato</strong> il prima possibile</h4>
                    <form @submit.prevent="submitForm()" action="POST" class="d-flex flex-column justify-content-center">

                        <label for="guest_name" class="form-label fw-semibold fs-6">Nome</label>
                        <input type="text" name="guest_name" placeholder="Luca Rossi" class="form-control input_text"
                            v-model="name" required>
                        <small v-for="error in errors.name" :key="error" class="text-danger">{{ error }}</small>


                        <label for="phone_number" class="form-label fw-semibold fs-6 mt-4">Numero di telefono</label>
                        <input type="number" name="phone_number" placeholder="347 5467889" class="form-control input_text"
                            v-model="phone_number" required>
                        <small v-for="error in errors.phone_number" :key="error" class="text-danger">{{ error }}</small>


                        <label for="guest_meassage" class="form-label fw-semibold fs-6 mt-4">Message</label>
                        <textarea name="guest_meassage" id="message" cols="30" rows="5"
                            placeholder="Indicaci la vettura di tuo interesse" class="form-control input_text"
                            v-model="message" required></textarea>
                        <small v-for="error in errors.message" :key="error" class="text-danger">{{ error }}</small>


                        <div class="d-flex justify-content-center mt-4">
                            <button type="submit"
                                class="px-4 py-2 border border-0 submit_button rounded-4 fs-6 bg_slide_dark"
                                style="width: 150px;">
                                <span class="strecth_text_hover">Invia</span>
                                <span class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-send" viewBox="0 0 16 16">
                                        <path
                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>

                </div>

            </div>
            <div v-if="!success && loading"
                class="col-12 vh100_no_header_footer p-5 d-flex flex-column text_cloudy align-items-center justify-content-center ghost z-2">
                <div>Non aggiornare la pagina</div>
                <h4>Stiamo elaborando la tua richiesta</h4>
            </div>
            <div class="col-12 vh100_no_header_footer p-5 d-flex flex-column text_cloudy align-items-center justify-content-center ghost z-2"
                v-if="success && !loading">
                <h2 class="fw-bold">Il messaggio è stato inviato correttamente</h2>
                <div>Verrai ricontattato il prima possibile <span class="text-success">grazie</span>
                </div>

            </div>
        </div>
        <!-- <div class="background_logo w-100 h-100 position-absolute container bottom-0 end-0 z-1 overflow-hidden">
            <img src="../../public/img/logocd_gray.png" alt="Logo in background" class="w-100 h-100">
        </div> -->
        <div class="w-100 h-100 position-absolute container bottom-0 end-0">
            <div class="background_movement position-absolute"></div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>