class Start extends Phaser.Scene {
    constructor() {
        super('Start');

        this.PLAY_BUTTON_KEY = 'gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview';
        this.PLAY_BUTTON_SIZE_REDUCTION = 40;

        this.LAYOUT_PORTRAIT = {
            adobe_express___file_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            background: { x: 0, y: 0, scale: 1, depth: 1 },
            chatgpt_image_apr_15__2026__10_03_34_am_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image__removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_1e521b1e521b1e52_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_2juaqy2juaqy2jua_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_54oktl54oktl54ok_copy_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_85c01c85c01c85c0_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image___2__removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_hnojj3hnojj3hnoj_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_lanxo2lanxo2lanx_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_nvyzdanvyzdanvyz_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview: { x: 538, y: 1093, scale: 0.922, depth: 1 },
            gemini_generated_image_ruu05druu05druu0__1__removebg_preview: { x: 541, y: 657, scale: 1.86, depth: 1 },
            gemini_generated_image_y499b3y499b3y499_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260414_wa0014_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260414_wa0017_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260414_wa0019_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0019_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0020_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0023_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0024_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            bg10: { x: 0, y: 0, scale: 1, depth: 1 },
            piza: { x: 0, y: 0, scale: 1, depth: 1 },
            sandwich: { x: 0, y: 0, scale: 1, depth: 1 },
};

        this.LAYOUT_LANDSCAPE = {
            adobe_express___file_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            background: { x: 0, y: 0, scale: 1, depth: 1 },
            chatgpt_image_apr_15__2026__10_03_34_am_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image__removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_1e521b1e521b1e52_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_2juaqy2juaqy2jua_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_54oktl54oktl54ok_copy_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_85c01c85c01c85c0_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image___2__removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_hnojj3hnojj3hnoj_removebg_preview: { x: 60, y: 27, scale: 1, depth: 1 },
            gemini_generated_image_lanxo2lanxo2lanx_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_nvyzdanvyzdanvyz_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview: { x: 936, y: 755, scale: 0.578, depth: 1 },
            gemini_generated_image_ruu05druu05druu0__1__removebg_preview: { x: 936, y: 424, scale: 1.52, depth: 1 },
            gemini_generated_image_y499b3y499b3y499_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260414_wa0014_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260414_wa0017_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260414_wa0019_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0019_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0020_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0023_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0024_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            bg10: { x: 1871, y: 646, scale: 1, depth: 1 },
            piza: { x: 0, y: 0, scale: 1, depth: 1 },
            sandwich: { x: 0, y: 0, scale: 1, depth: 1 },
};
    }

    preload() {
        this.loadAllTheAssets();
    }

    create() {
        this.createUI();
        this.setupPlayButton();
        this.onOrientationChange();
        this.uiEditor = new UIEditor(this, {
            enabled: false,
            keys: this.getEditorKeys(),
            gridSize: 10,
            fileName: 'start.js'
        });
    }

    getEditorKeys() {
        return [
            // 'adobe_express___file_removebg_preview',
            // 'background',
            // 'chatgpt_image_apr_15__2026__10_03_34_am_removebg_preview',
            // 'gemini_generated_image__removebg_preview',
            // 'gemini_generated_image_1e521b1e521b1e52_removebg_preview',
            // 'gemini_generated_image_2juaqy2juaqy2jua_removebg_preview',
            // 'gemini_generated_image_54oktl54oktl54ok_copy_removebg_preview',
            // 'gemini_generated_image_85c01c85c01c85c0_removebg_preview',
            // 'gemini_generated_image___2__removebg_preview',
            // 'gemini_generated_image_hnojj3hnojj3hnoj_removebg_preview',
            // 'gemini_generated_image_lanxo2lanxo2lanx_removebg_preview',
            // 'gemini_generated_image_nvyzdanvyzdanvyz_removebg_preview',
            'gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview',
            'gemini_generated_image_ruu05druu05druu0__1__removebg_preview',
            // 'gemini_generated_image_y499b3y499b3y499_removebg_preview',
            // 'img_20260414_wa0014_removebg_preview',
            // 'img_20260414_wa0017_removebg_preview',
            // 'img_20260414_wa0019_removebg_preview',
            // 'img_20260415_wa0019_removebg_preview',
            // 'img_20260415_wa0020_removebg_preview',
            // 'img_20260415_wa0023_removebg_preview',
            // 'img_20260415_wa0024_removebg_preview',
            // 'bg10',
            // 'piza',
            // 'sandwich',
        ];
    }

    createUI() {
        const keys = [
            'adobe_express___file_removebg_preview',
            'background',
            'chatgpt_image_apr_15__2026__10_03_34_am_removebg_preview',
            'gemini_generated_image__removebg_preview',
            'gemini_generated_image_1e521b1e521b1e52_removebg_preview',
            'gemini_generated_image_2juaqy2juaqy2jua_removebg_preview',
            'gemini_generated_image_54oktl54oktl54ok_copy_removebg_preview',
            'gemini_generated_image_85c01c85c01c85c0_removebg_preview',
            'gemini_generated_image___2__removebg_preview',
            'gemini_generated_image_hnojj3hnojj3hnoj_removebg_preview',
            'gemini_generated_image_lanxo2lanxo2lanx_removebg_preview',
            'gemini_generated_image_nvyzdanvyzdanvyz_removebg_preview',
            'gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview',
            'gemini_generated_image_ruu05druu05druu0__1__removebg_preview',
            'gemini_generated_image_y499b3y499b3y499_removebg_preview',
            'img_20260414_wa0014_removebg_preview',
            'img_20260414_wa0017_removebg_preview',
            'img_20260414_wa0019_removebg_preview',
            'img_20260415_wa0019_removebg_preview',
            'img_20260415_wa0020_removebg_preview',
            'img_20260415_wa0023_removebg_preview',
            'img_20260415_wa0024_removebg_preview',
            'bg10',
            'piza',
            'sandwich'
        ];

        keys.forEach((key) => {
            this[key] = this.createOptionalImage(key);
        });
    }

    createOptionalImage(key) {
        if (!this.textures.exists(key)) return null;

        return this.add.image(0, 0, key).setOrigin(0.5).setAlpha(1);
    }

    setupPlayButton() {
        const playButton = this[this.PLAY_BUTTON_KEY];

        if (!playButton) return;

        const resetScale = () => {
            const isLandscape = this.scale.width > this.scale.height;
            const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;
            const baseScale = this.getPlayButtonScale(layout);
            playButton.setScale(baseScale);
        };

        playButton
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => {
                resetScale();
                playButton.setScale(playButton.scaleX * 1.03, playButton.scaleY * 1.03);
            })
            .on('pointerout', () => resetScale())
            .on('pointerdown', () => {
                resetScale();
                playButton.setScale(playButton.scaleX * 0.96, playButton.scaleY * 0.96);
            })
            .on('pointerup', () => {
                resetScale();
                this.scene.start('Game');
            });
    }

    getPlayButtonScale(layout) {
        const config = layout[this.PLAY_BUTTON_KEY];
        if (!config) return 1;

        const texture = this.textures.get(this.PLAY_BUTTON_KEY);
        const source = texture && texture.getSourceImage();
        const baseWidth = source ? source.width * config.scale : 0;

        if (!baseWidth) return config.scale;

        return Math.max((baseWidth - this.PLAY_BUTTON_SIZE_REDUCTION) / source.width, 0.05);
    }

    onOrientationChange() {
        this.reflowForResize({ width: this.scale.width, height: this.scale.height });
        this.scale.on('resize', this.reflowForResize, this);
    }

    reflowForResize(gameSize = { width: this.scale.width, height: this.scale.height }) {
        const isLandscape = gameSize.width > gameSize.height;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;

        for (const key in layout) {
            if (this[key] && layout.hasOwnProperty(key)) {
                const { x, y, scale, alpha, depth, r } = layout[key];
                this[key].setPosition(x, y).setRotation(r || 0);
                if (scale) {
                    const resolvedScale = key === this.PLAY_BUTTON_KEY
                        ? this.getPlayButtonScale(layout)
                        : scale;
                    this[key].setScale(resolvedScale);
                }
                if (alpha !== undefined) this[key].setAlpha(alpha);
                if (depth) this[key].setDepth(depth);
            }
        }
    }

    loadAllTheAssets() {
        const assets = [
            // { key: 'adobe_express___file_removebg_preview', path: 'assets/Adobe_Express_-_file-removebg-preview.png' },
            // { key: 'background', path: 'assets/Background.png' },
            // { key: 'chatgpt_image_apr_15__2026__10_03_34_am_removebg_preview', path: 'assets/ChatGPT_Image_Apr_15__2026__10_03_34_AM-removebg-preview.png' },
            // { key: 'gemini_generated_image__removebg_preview', path: 'assets/Gemini_Generated_Image_-removebg-preview.png' },
            // { key: 'gemini_generated_image_1e521b1e521b1e52_removebg_preview', path: 'assets/Gemini_Generated_Image_1e521b1e521b1e52-removebg-preview.png' },
            // { key: 'gemini_generated_image_2juaqy2juaqy2jua_removebg_preview', path: 'assets/Gemini_Generated_Image_2juaqy2juaqy2jua-removebg-preview.png' },
            // { key: 'gemini_generated_image_54oktl54oktl54ok_copy_removebg_preview', path: 'assets/Gemini_Generated_Image_54oktl54oktl54ok_copy-removebg-preview.png' },
            // { key: 'gemini_generated_image_85c01c85c01c85c0_removebg_preview', path: 'assets/Gemini_Generated_Image_85c01c85c01c85c0-removebg-preview.png' },
            // { key: 'gemini_generated_image___2__removebg_preview', path: 'assets/Gemini_Generated_Image___2_-removebg-preview.png' },
            // { key: 'gemini_generated_image_hnojj3hnojj3hnoj_removebg_preview', path: 'assets/Gemini_Generated_Image_hnojj3hnojj3hnoj-removebg-preview.png' },
            // { key: 'gemini_generated_image_lanxo2lanxo2lanx_removebg_preview', path: 'assets/Gemini_Generated_Image_lanxo2lanxo2lanx-removebg-preview.png' },
            // { key: 'gemini_generated_image_nvyzdanvyzdanvyz_removebg_preview', path: 'assets/Gemini_Generated_Image_nvyzdanvyzdanvyz-removebg-preview.png' },
            { key: 'gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview', path: 'assets/Gemini_Generated_Image_r8ybjyr8ybjyr8yb-removebg-preview.png' },
            { key: 'gemini_generated_image_ruu05druu05druu0__1__removebg_preview', path: 'assets/Gemini_Generated_Image_ruu05druu05druu0__1_-removebg-preview.png' },
            // { key: 'gemini_generated_image_y499b3y499b3y499_removebg_preview', path: 'assets/Gemini_Generated_Image_y499b3y499b3y499-removebg-preview.png' },
            // { key: 'img_20260414_wa0014_removebg_preview', path: 'assets/IMG-20260414-WA0014-removebg-preview.png' },
            // { key: 'img_20260414_wa0017_removebg_preview', path: 'assets/IMG-20260414-WA0017-removebg-preview.png' },
            // { key: 'img_20260414_wa0019_removebg_preview', path: 'assets/IMG-20260414-WA0019-removebg-preview.png' },
            // { key: 'img_20260415_wa0019_removebg_preview', path: 'assets/IMG-20260415-WA0019-removebg-preview.png' },
            // { key: 'img_20260415_wa0020_removebg_preview', path: 'assets/IMG-20260415-WA0020-removebg-preview.png' },
            // { key: 'img_20260415_wa0023_removebg_preview', path: 'assets/IMG-20260415-WA0023-removebg-preview.png' },
            // { key: 'img_20260415_wa0024_removebg_preview', path: 'assets/IMG-20260415-WA0024-removebg-preview.png' },
            // { key: 'bg10', path: 'assets/bg10.jpeg' },
            // { key: 'piza', path: 'assets/piza.png' },
            // { key: 'sandwich', path: 'assets/sandwich.png' },
        ];

        const sfxs = [
            // No audio assets found
        ];

        for (const asset of assets) {
            this.load.image(asset.key, asset.path);
        }

        for (const sfx of sfxs) {
            this.load.audio(sfx.key, sfx.path);
        }
    }
}
