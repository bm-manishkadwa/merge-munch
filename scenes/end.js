class End extends Phaser.Scene {
    constructor() {
        super('End');

        this.LAYOUT_PORTRAIT = {
            img_20260415_wa0024_removebg_preview: { x: 0.5, y: 0.75, scale: 1.56, depth: 1 },
            gemini_generated_image_lanxo2lanxo2lanx_removebg_preview: { x: 0.5, y: 0.4, scale: 1.2, depth: 2 },
        };

        this.LAYOUT_LANDSCAPE = {
            img_20260415_wa0024_removebg_preview: { x: 0.5, y: 0.7, scale: 1.22, depth: 1 },
            gemini_generated_image_lanxo2lanxo2lanx_removebg_preview: { x: 0.5, y: 0.35, scale: 0.8, depth: 2 },
        };
    }

    init(data) {
        this.finalScore = data?.score || 0;

        if (data?.result) {
            this.isWin = data.result === 'win';
        } else {
            this.isWin = !!data?.isWin;
        }
    }

    preload() {
        const assetPath = "assets/";

        this.load.image('lossImg', assetPath + "IMG-20260415-WA0024-removebg-preview.png");
        this.load.image('winImg', assetPath + "Gemini_Generated_Image_lanxo2lanxo2lanx-removebg-preview.png");

        this.load.image('img_20260415_wa0024_removebg_preview', assetPath + "IMG-20260415-WA0024-removebg-preview.png");
        this.load.image('gemini_generated_image_lanxo2lanxo2lanx_removebg_preview', assetPath + "Gemini_Generated_Image_lanxo2lanxo2lanx-removebg-preview.png");
    }

    create() {
        this.createEndUI();
        this.handleResult();

        this.buildResultUI();

        this.onOrientationChange();
    }

    // ✅ SHOW WIN / LOSE BASE IMAGE
    handleResult() {
        this.gemini_generated_image_lanxo2lanxo2lanx_removebg_preview.setAlpha(this.isWin ? 1 : 0);
        this.img_20260415_wa0024_removebg_preview.setAlpha(this.isWin ? 0 : 1);
    }

    // =========================
    // 🔥 OVERLAY UI (STORE OBJECTS)
    // =========================
    buildResultUI() {
        const cam = this.cameras.main;

        this.overlayBg = this.add.rectangle(0, 0, 0, 0, this.isWin ? 0x1d2e1d : 0x2e1a1a)
            .setDepth(50);

        this.resultImage = this.add.image(0, 0, this.isWin ? "winImg" : "lossImg")
            .setDepth(60);

        this.titleText = this.add.text(0, 0,
            this.isWin ? "YOU WIN!" : "TIME'S UP!",
            {
                fontSize: "48px",
                color: this.isWin ? "#7dff95" : "#ff8a6b",
                stroke: "#000",
                strokeThickness: 6
            }
        ).setOrigin(0.5).setDepth(60);

        this.scoreText = this.add.text(0, 0,
            `Score: ${this.finalScore}`,
            {
                fontSize: "28px",
                color: "#ffffff"
            }
        ).setOrigin(0.5).setDepth(60);

        this.playBtn = this.add.rectangle(0, 0, 220, 80, 0x009900)
            .setInteractive()
            .setDepth(60);

        this.playText = this.add.text(0, 0, "PLAY AGAIN", {
            fontSize: "24px",
            color: "#fff"
        }).setOrigin(0.5).setDepth(60);

        this.playBtn.on("pointerdown", () => {
            this.scene.start("Game");
        });

        // animation
        this.tweens.add({
            targets: this.titleText,
            scale: 1.05,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
    }

    // =========================
    // 🔥 BASE IMAGES
    // =========================
    createEndUI() {
        this.img_20260415_wa0024_removebg_preview =
            this.add.image(0, 0, 'img_20260415_wa0024_removebg_preview')
                .setOrigin(0.5).setAlpha(0);

        this.gemini_generated_image_lanxo2lanxo2lanx_removebg_preview =
            this.add.image(0, 0, 'gemini_generated_image_lanxo2lanxo2lanx_removebg_preview')
                .setOrigin(0.5).setAlpha(0);
    }

    // =========================
    // 🔥 ORIENTATION FIX (MAIN FIX)
    // =========================
    onOrientationChange() {
        this.reflowForResize();

        this.scale.on('resize', (gameSize) => {
            this.reflowForResize(gameSize);
        });
    }

    reflowForResize(gameSize) {
        const cam = this.cameras.main;

        const width = cam.width;
        const height = cam.height;

        const isLandscape = width > height;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;

        // ✅ BASE IMAGES POSITION
        for (const key in layout) {
            if (this[key]) {
                const { x, y, scale, depth } = layout[key];

                this[key].setPosition(width * x, height * y);

                if (scale !== undefined) this[key].setScale(scale);
                if (depth !== undefined) this[key].setDepth(depth);
            }
        }

        // =========================
        // ✅ OVERLAY CENTER FIX (IMPORTANT)
        // =========================
        this.overlayBg
            .setPosition(width / 2, height / 2)
            .setSize(width, height);

        this.resultImage
            .setPosition(width / 2, height * 0.4)
            .setScale(isLandscape ? 0.34 : 0.45);

        this.titleText.setPosition(width / 2, height * 0.15);
        this.scoreText.setPosition(width / 2, height * 0.3);

        this.playBtn.setPosition(width / 2, height * 0.7);
        this.playText.setPosition(width / 2, height * 0.7);
    }
}