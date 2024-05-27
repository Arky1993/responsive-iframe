class ResponsiveIframe extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .responsive-iframe {
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-bottom: 56.25%; /* 16:9 aspect ratio */
                }
                .responsive-iframe iframe {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            </style>
            <div class="responsive-iframe">
                <iframe src="https://kaisetsu-chat.com/chatbot/client/?seqid=XJV678VPZ&room_id=665" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
    }
}

customElements.define('responsive-iframe', ResponsiveIframe);
