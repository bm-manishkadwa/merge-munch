class Game extends Phaser.Scene {
    constructor() {
        super('Game');

        this.LAYOUT_PORTRAIT = {
            adobe_express___file_removebg_preview: { x: 0.5, y: 0.18, scale: 0.28, depth: 2 },
            gemini_generated_image__removebg_preview: { x: -263, y: 451, scale: 2.376, depth: 2 },
            gemini_generated_image_1e521b1e521b1e52_removebg_preview: { x: 522, y: 1510, scale: 1, depth: 1 },
            gemini_generated_image_2juaqy2juaqy2jua_removebg_preview: { x: 40, y: 552, scale: 2.376, depth: 2 },
            gemini_generated_image_nvyzdanvyzdanvyz_removebg_preview: { x: -414, y: 55, scale: 2.376, depth: 2 },
            gemini_generated_image_y499b3y499b3y499_removebg_preview: { x: 456, y: 1274, scale: 0.396, depth: 2 },
            img_20260414_wa0014_removebg_preview: { x: -57, y: 37, scale: 2.16, depth: 2 },
            img_20260414_wa0017_removebg_preview: { x: -225, y: 268, scale: 2.16, depth: 2 },
            img_20260414_wa0019_removebg_preview: { x: -501, y: 171, scale: 2.16, depth: 2 },
            img_20260415_wa0019_removebg_preview: { x: 643, y: 1203, scale: 0.58, depth: 2 },
            img_20260415_wa0023_removebg_preview: { x: -411, y: 95, scale: 2.16, depth: 2 },
            bg10: { x: 539, y: 829, scale: 0.9, depth: 1 },
            pizaa: { x: 909, y: 1264, scale: 0.5, depth: 3 },
            sandwich: { x: -149, y: 190, scale: 3.78, depth: 3 },
            background: { x: 559, y: 998, scale: 8.136, depth: 1 },
            chatgpt_image_apr_15__2026__10_03_34_am_removebg_preview: { x: -293, y: 251, scale: 3.24, depth: 2 },
            gemini_generated_image_54oktl54oktl54ok_copy_removebg_preview: { x: -721, y: 14, scale: 2.376, depth: 2 },
            gemini_generated_image_85c01c85c01c85c0_removebg_preview: { x: 202, y: -127, scale: 2.376, depth: 2 },
            gemini_generated_image___2__removebg_preview: { x: -53, y: 24, scale: 2.376, depth: 2 },
            gemini_generated_image_hnojj3hnojj3hnoj_removebg_preview: { x: -32, y: 357, scale: 2.376, depth: 2 },
            gemini_generated_image_lanxo2lanxo2lanx_removebg_preview: { x: -715, y: -154, scale: 2.376, depth: 2 },
            gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview: { x: -265, y: 204, scale: 2.376, depth: 2 },
            gemini_generated_image_ruu05druu05druu0__1__removebg_preview: { x: -33, y: 115, scale: 2.376, depth: 2 },
            img_20260415_wa0020_removebg_preview: { x: -56, y: -329, scale: 2.16, depth: 2 },
            img_20260415_wa0024_removebg_preview: { x: -225, y: 12, scale: 2.16, depth: 2 },
        };

        this.LAYOUT_LANDSCAPE = {
            gemini_generated_image_1e521b1e521b1e52_removebg_preview: { x: 960, y: 959, scale: 0.84, depth: 1 },
            bg10: { x: 957, y: 423, scale: 0.7, depth: 1 },
            adobe_express___file_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            background: { x: 0, y: 0, scale: 1, depth: 1 },
            chatgpt_image_apr_15__2026__10_03_34_am_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image__removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_2juaqy2juaqy2jua_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_54oktl54oktl54ok_copy_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_85c01c85c01c85c0_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image___2__removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_hnojj3hnojj3hnoj_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_lanxo2lanxo2lanx_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_nvyzdanvyzdanvyz_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_ruu05druu05druu0__1__removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            gemini_generated_image_y499b3y499b3y499_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260414_wa0014_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260414_wa0017_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260414_wa0019_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0019_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0020_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0023_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            img_20260415_wa0024_removebg_preview: { x: 0, y: 0, scale: 1, depth: 1 },
            pizaa: { x: 837, y: 663, scale: 1, depth: 1 },
            sandwich: { x: 1187, y: 553, scale: 1, depth: 1 },
        };
    }

    preload() {
        this.loadAllTheAssets();
    }


    create() {
        this.createGameUI();
        this.applyResponsiveSceneLayout(this.scale.width, this.scale.height);
        this.initializeMergeGame();

        this.onOrientationChange();
        this.uiEditor = new UIEditor(this, {
            enabled: false,
            keys: this.getEditorKeys(),
            gridSize: 10,
            fileName: 'game.js'
        });
    }

    initializeMergeGame() {
        const w = this.scale.width;
        const h = this.scale.height;
        this.itemSizes = {};

        this.items = [];
        this.storedItems = {};
        this.types = ["type1", "type2", "type3", "type4"];

        this.createBoardLayout(w, h);
        this.updateResponsiveItemSizes(w, h);
        this.createStorageBox(w, h); // ✅ IMPORTANT

        this.timeLeft = 40;
        this.score = 0;
        this.won = false;

        this.timeText = this.add.text(0, 0, `Time: ${this.timeLeft}s`, {
            fontSize: "24px",
            fill: "#000"
        }).setDepth(1000).setScrollFactor(0);

        this.scoreText = this.add.text(0, 0, "Score: 0", {
            fontSize: "22px",
            fill: "#d1aa0c"
        }).setDepth(1000).setScrollFactor(0);

        this.createHudChrome();
        this.updateHudPosition();

        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => {
                this.timeLeft--;
                this.timeText.setText(`Time: ${this.timeLeft}s`);

                if (this.timeLeft <= 0 && !this.won) {
                    this.scene.start("End", { score: this.score, isWin: false });
                }
            }
        });

        this.spawnItems();

        this.input.on("dragstart", (p, obj) => {
            obj.prevCol = obj.col;
            obj.prevRow = obj.row;
        });

        this.input.on("drag", (p, obj, x, y) => {
            obj.x = x;
            obj.y = y;
        });

        this.input.on("dragend", (p, obj) => {
            this.handleDrop(obj);
        });
    }

    createBoardLayout(w, h) {
        this.gridCols = 5;
        this.gridRows = 4;

        const width = w || this.scale.width;
        const height = h || this.scale.height;
        const tray = this.gemini_generated_image_1e521b1e521b1e52_removebg_preview;
        const isLandscape = width > height;

        const horizontalPadding = isLandscape ? width * 0.08 : width * 0.1;
        const topPadding = isLandscape ? height * 0.14 : height * 0.16;
        const trayGap = isLandscape ? height * 0.12 : height * 0.06;
        const bottomLimit = tray
            ? tray.y - tray.displayHeight * 0.5 - trayGap
            : height * (isLandscape ? 0.82 : 0.72);
        const availableWidth = width - horizontalPadding * 2;
        const availableHeight = Math.max(height * 0.28, bottomLimit - topPadding);

        this.cell = Math.floor(
            Math.min(
                availableWidth / this.gridCols,
                availableHeight / this.gridRows
            )
        );

        const gridWidth = this.cell * this.gridCols;
        const gridHeight = this.cell * this.gridRows;
        const boardCenterX = width * 0.5;
        const boardCenterY = topPadding + availableHeight * 0.5;

        this.offsetX = boardCenterX - gridWidth / 2 + this.cell / 2;
        this.offsetY = boardCenterY - gridHeight / 2 + this.cell / 2;
    }

    updateResponsiveItemSizes(width = this.scale.width, height = this.scale.height) {
        const isLandscape = width > height;
        const cell = this.cell || Math.min(width, height) * 0.18;
        const orientationScale = isLandscape ? 0.78 : 0.94;
        const boardMultipliers = {
            type1: 1.70,
            type2: 1.70,
            type3: 1.70,
            type4: 1.70,
        };
        const storageSizes = {
            type1: { w: 380, h: 170 },
            type2: { w: 190, h: 145 },
            type3: { w: 390, h: 200 },
            type4: { w: 180, h: 130 }
        };

        this.itemSizes = Object.fromEntries(
            Object.entries(storageSizes).map(([type, storage]) => {
                const boardSize = Math.max(
                    72,
                    Math.round(cell * boardMultipliers[type] * orientationScale)
                );

                return [type, { board: boardSize, storage }];
            })
        );
    }

    applyResponsiveSceneLayout(width = this.scale.width, height = this.scale.height) {
        const isLandscape = width > height;

        if (this.bg10) {
            this.bg10
                .setPosition(width * 0.5, height * (isLandscape ? 0.36 : 0.39))
                .setScale(isLandscape ? 0.7 : 0.96)
                .setDepth(1)
                .setAlpha(1);
        }

        if (this.gemini_generated_image_1e521b1e521b1e52_removebg_preview) {
            const trayBaseY = height * (isLandscape ? 0.91 : 0.84);
            const trayYOffset = isLandscape ? -36 : -75;
            this.gemini_generated_image_1e521b1e521b1e52_removebg_preview
                .setPosition(width * 0.5, trayBaseY + trayYOffset)
                .setScale(0.92)
                .setDepth(5)
                .setAlpha(1);
        }
    }
    createStorageBox(w, h) {
        const tray = this.gemini_generated_image_1e521b1e521b1e52_removebg_preview;
        if (!tray) return;

        const slotWidth = tray.displayWidth / 4;
        const slotHeight = tray.displayHeight * 0.7;

        this.storageSlots = {};
        const order = ["type2", "type1", "type3", "type4"];

        order.forEach((type, i) => {
            const x = tray.x - tray.displayWidth / 2 + slotWidth * (i + 0.5);

            this.storageSlots[type] = {
                x,
                y: tray.y,
                width: slotWidth * 0.86,
                height: slotHeight,
                isFilled: this.storedItems[type] || false
            };
        });
    }
    spawnItems() {
        const cells = [];

        for (let r = 0; r < this.gridRows; r++) {
            for (let c = 0; c < this.gridCols; c++) {
                cells.push({ col: c, row: r });
            }
        }

        Phaser.Utils.Array.Shuffle(cells);

        let index = 0;

        this.types.forEach(type => {
            for (let i = 0; i < 4; i++) {

                const cell = cells[index];

                const item = this.add.sprite(
                    this.offsetX + cell.col * this.cell,
                    this.offsetY - this.cell * 2,
                    type
                )
                    .setInteractive()
                    .setDepth(30);

                // ✅ NEW SIZE SYSTEM
                const size = this.itemSizes[type].board;
                item.setDisplaySize(size, size);

                this.input.setDraggable(item);

                item.type = type;
                item.level = 1;
                item.col = cell.col;
                item.row = cell.row;

                this.items.push(item);

                this.tweens.add({
                    targets: item,
                    y: this.offsetY + cell.row * this.cell,
                    duration: 500,
                    delay: index * 60
                });

                index++;
            }
        });
    }
    handleDrop(obj) {
        if (this.tryStoreDrop(obj)) {
            return;
        }

        const col = Phaser.Math.Clamp(
            Math.round((obj.x - this.offsetX) / this.cell),
            0,
            this.gridCols - 1
        );
        const row = Phaser.Math.Clamp(
            Math.round((obj.y - this.offsetY) / this.cell),
            0,
            this.gridRows - 1
        );

        let dropTarget = null;
        let closestDist = Number.POSITIVE_INFINITY;

        for (let other of this.items) {
            if (!other || other === obj) continue;
            const dist = Phaser.Math.Distance.Between(obj.x, obj.y, other.x, other.y);

            if (dist < this.cell * 0.6 && dist < closestDist) {
                closestDist = dist;
                dropTarget = other;
            }
        }

        if (dropTarget) {
            if (this.canMerge(obj, dropTarget)) {
                this.merge(dropTarget, obj);
                return;
            }

            this.returnToPreviousPosition(obj);
            this.showMergeRulePopup("Only same type and same level can merge");
            return;
        }

        const occupiedCell = this.items.find(other =>
            other &&
            other !== obj &&
            !other.isStored &&
            other.col === col &&
            other.row === row
        );

        if (occupiedCell) {
            this.returnToPreviousPosition(obj);
            return;
        }

        obj.col = col;
        obj.row = row;
        this.tweenToGrid(obj, col, row);
    }

    tryStoreDrop(obj) {
        if (!this.storageSlots || obj.isStored) return false;

        const slot = this.storageSlots[obj.type];
        if (!slot) return false;

        const withinX = Math.abs(obj.x - slot.x) <= slot.width / 2;
        const withinY = Math.abs(obj.y - slot.y) <= slot.height / 2;

        if (!withinX || !withinY) return false;

        if (slot.isFilled) {
            this.returnToPreviousPosition(obj);
            this.showMergeRulePopup("That image box slot is already full");
            return true;
        }

        this.moveToStorage(obj);
        return true;
    }

    canMerge(source, target) {
        if (!source || !target) return false;
        if (source === target) return false;
        if (source.type !== target.type) return false;
        if (source.level !== target.level) return false;
        return source.level < 3;
    }

    tweenToGrid(obj, col, row) {
        this.tweens.add({
            targets: obj,
            x: this.offsetX + col * this.cell,
            y: this.offsetY + row * this.cell,
            duration: 200
        });
    }

    returnToPreviousPosition(obj) {
        const prevCol = obj.prevCol ?? obj.col ?? 0;
        const prevRow = obj.prevRow ?? obj.row ?? 0;
        obj.col = prevCol;
        obj.row = prevRow;
        this.tweenToGrid(obj, prevCol, prevRow);
    }

    showMergeRulePopup(message) {
        const popup = this.add.text(this.scale.width / 2, this.scale.height * 0.12, message, {
            fontSize: "20px",
            fill: "#ffffff",
            backgroundColor: "#c0392b",
            padding: { x: 12, y: 8 }
        }).setOrigin(0.5).setDepth(1000).setAlpha(0);

        this.tweens.add({
            targets: popup,
            alpha: 1,
            y: popup.y - 10,
            duration: 120,
            yoyo: true,
            hold: 700,
            onComplete: () => popup.destroy()
        });
    }

    applyStoredItemSize(item) {
        if (!item) return;

        const storageSize = this.itemSizes?.[item.type]?.storage;
        if (!storageSize) return;

        item.setDisplaySize(storageSize.w, storageSize.h);
    }

    getBoardDisplaySize(item) {
        if (!item) return null;

        const baseSize = this.itemSizes?.[item.type]?.board;
        if (!baseSize) return null;

        if (item.texture?.key === "stage2_2") {
            return baseSize + 20;
        }

        return baseSize;
    }

    updateItemAppearance(item) {
        if (!item) return;

        const index = this.types.indexOf(item.type) + 1;

        if (item.level === 1) {
            item.setTexture(item.type);
            item.clearTint();
            return;
        }

        if (item.level === 2) {
            item.setTexture(`stage2_${index}`);

            const stage2TintMap = {
                type1: 0xffffff ,
                type2: 0xffffff,
                type3: 0xffffff,
                type4: 0xffffff
            };

            const tint = stage2TintMap[item.type];
            if (tint !== undefined) item.setTint(tint);
            else item.clearTint();
            return;
        }

        if (item.level === 3) {
            item.setTexture(`stage3_${index}`);
            item.clearTint();
        }
    }

    merge(target, source) {
        source.destroy();
        this.items = this.items.filter(i => i !== source);

        target.level++;
        this.updateItemAppearance(target);
        const mergedSize = this.getBoardDisplaySize(target);
        if (mergedSize) target.setDisplaySize(mergedSize, mergedSize);

        if (target.level === 3) {
            this.moveToStorage(target);
        }

        this.score += 20;
        this.scoreText.setText(`Score: ${this.score}`);

        this.applyGravity();
    }

    applyGravity() {
        if (!this.items || this.items.length === 0) return;

        for (let col = 0; col < this.gridCols; col++) {
            const columnItems = this.items
                .filter(item => item && !item.isStored && item.col === col)
                .sort((a, b) => b.row - a.row);

            columnItems.forEach((item, index) => {
                const targetRow = this.gridRows - 1 - index;

                if (item.row === targetRow) return;

                item.row = targetRow;

                this.tweens.add({
                    targets: item,
                    x: this.offsetX + item.col * this.cell,
                    y: this.offsetY + targetRow * this.cell,
                    duration: 220,
                    ease: "Cubic.easeIn"
                });
            });
        }
    }

    moveToStorage(item) {
        const slot = this.storageSlots[item.type];
        if (!slot || slot.isFilled) return;

        slot.isFilled = true;

        item.isStored = true;

        item.prevCol = item.col;
        item.prevRow = item.row;
        item.col = null;
        item.row = null;

        this.input.setDraggable(item, false);
        this.applyStoredItemSize(item);

        this.tweens.add({
            targets: item,
            x: slot.x,
            y: slot.y,
            duration: 300,
            ease: "Power2",
            onComplete: () => {
                item.setDepth(50);
                item.setScrollFactor(0);

                item.setInteractive({ useHandCursor: true });
                item.removeAllListeners("pointerdown");
                item.on("pointerdown", () => this.releaseFromStorage(item));

                this.storedItems[item.type] = true;

                this.checkWinCondition();
            }
        });

        this.applyGravity();
    }

    releaseFromStorage(item) {
        if (!item || !item.isStored) return;

        const openCell = this.findOpenBoardCell();
        if (!openCell) {
            this.showMergeRulePopup("No free board space");
            return;
        }

        const slot = this.storageSlots[item.type];
        if (slot) {
            slot.isFilled = false;
        }

        item.isStored = false;
        item.col = openCell.col;
        item.row = openCell.row;
        this.storedItems[item.type] = false;

        item.removeAllListeners("pointerdown");
        item.setInteractive({ useHandCursor: true });
        this.input.setDraggable(item);

        this.updateItemAppearance(item);
        const size = this.getBoardDisplaySize(item);
        if (size) item.setDisplaySize(size, size);
        item.setDepth(30);

        this.tweenToGrid(item, openCell.col, openCell.row);
    }

    relayoutItems() {
        if (!this.items) return;

        this.items.forEach((item) => {
            if (!item) return;

            if (item.isStored) {
                const slot = this.storageSlots?.[item.type];
                if (!slot) return;

                this.applyStoredItemSize(item);
                item.setPosition(slot.x, slot.y);
                return;
            }

            if (typeof item.col !== "number" || typeof item.row !== "number") return;

            const boardSize = this.getBoardDisplaySize(item);
            if (boardSize) {
                item.setDisplaySize(boardSize, boardSize);
            }

            item.setPosition(
                this.offsetX + item.col * this.cell,
                this.offsetY + item.row * this.cell
            );
        });
    }

    findOpenBoardCell() {
        for (let row = 0; row < this.gridRows; row++) {
            for (let col = 0; col < this.gridCols; col++) {
                const occupied = this.items.find(other =>
                    other &&
                    !other.isStored &&
                    other.col === col &&
                    other.row === row
                );

                if (!occupied) {
                    return { col, row };
                }
            }
        }

        return null;
    }
    checkWinCondition() {
        const all = this.types.every(t => this.storedItems[t]);
        if (all && !this.won) {
            this.won = true;
            this.scene.start("End", { score: this.score, isWin: true });
        }
    }

    createHudChrome() {
        this.hudChrome = this.add.graphics().setDepth(999).setScrollFactor(0);
        this.redrawHudChrome();
    }

    redrawHudChrome() {
        if (!this.hudChrome) return;

        const panelWidth = 320;
        const panelHeight = 78;
        this.hudPanelWidth = panelWidth;
        this.hudPanelHeight = panelHeight;

        this.hudChrome.clear();
        this.hudChrome.fillStyle(0x2b1400, 0.65);
        this.hudChrome.lineStyle(3, 0xf6d365, 0.95);
        this.hudChrome.fillRoundedRect(0, 0, panelWidth, panelHeight, 18);
        this.hudChrome.strokeRoundedRect(0, 0, panelWidth, panelHeight, 18);
    }

    updateHudPosition() {
        const bg = this.bg10;
        const panelWidth = this.hudPanelWidth || 320;
        const panelHeight = this.hudPanelHeight || 78;

        if (!bg) return;

        const panelX = bg.x - panelWidth / 2;
        const panelY = bg.y - bg.displayHeight / 2 + 24;
        const centerX = bg.x;

        if (this.hudChrome) {
            this.hudChrome.setPosition(panelX, panelY);
        }

        if (this.timeText) {
            this.timeText
                .setOrigin(0.5)
                .setPosition(centerX, panelY + panelHeight * 0.32);
        }

        if (this.scoreText) {
            this.scoreText
                .setOrigin(0.5)
                .setPosition(centerX, panelY + panelHeight * 0.72);
        }
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
            // 'gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview',
            // 'gemini_generated_image_ruu05druu05druu0__1__removebg_preview',
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
            //'pizaa'
            //'sandwichh',
        ];
    }

    createGameUI() {
        // this.adobe_express___file_removebg_preview = this.add.image(0, 0, 'adobe_express___file_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.background = this.add.image(0, 0, 'background').setOrigin(0.5).setAlpha(0);
        // this.chatgpt_image_apr_15__2026__10_03_34_am_removebg_preview = this.add.image(0, 0, 'chatgpt_image_apr_15__2026__10_03_34_am_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image__removebg_preview = this.add.image(0, 0, 'gemini_generated_image__removebg_preview').setOrigin(0.5).setAlpha(0);
        this.gemini_generated_image_1e521b1e521b1e52_removebg_preview = this.add.image(0, 0, 'gemini_generated_image_1e521b1e521b1e52_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image_2juaqy2juaqy2jua_removebg_preview = this.add.image(0, 0, 'gemini_generated_image_2juaqy2juaqy2jua_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image_54oktl54oktl54ok_copy_removebg_preview = this.add.image(0, 0, 'gemini_generated_image_54oktl54oktl54ok_copy_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image_85c01c85c01c85c0_removebg_preview = this.add.image(0, 0, 'gemini_generated_image_85c01c85c01c85c0_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image___2__removebg_preview = this.add.image(0, 0, 'gemini_generated_image___2__removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image_hnojj3hnojj3hnoj_removebg_preview = this.add.image(0, 0, 'gemini_generated_image_hnojj3hnojj3hnoj_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image_lanxo2lanxo2lanx_removebg_preview = this.add.image(0, 0, 'gemini_generated_image_lanxo2lanxo2lanx_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image_nvyzdanvyzdanvyz_removebg_preview = this.add.image(0, 0, 'gemini_generated_image_nvyzdanvyzdanvyz_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview = this.add.image(0, 0, 'gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image_ruu05druu05druu0__1__removebg_preview = this.add.image(0, 0, 'gemini_generated_image_ruu05druu05druu0__1__removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.gemini_generated_image_y499b3y499b3y499_removebg_preview = this.add.image(0, 0, 'gemini_generated_image_y499b3y499b3y499_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.img_20260414_wa0014_removebg_preview = this.add.image(0, 0, 'img_20260414_wa0014_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.img_20260414_wa0017_removebg_preview = this.add.image(0, 0, 'img_20260414_wa0017_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.img_20260414_wa0019_removebg_preview = this.add.image(0, 0, 'img_20260414_wa0019_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.img_20260415_wa0019_removebg_preview = this.add.image(0, 0, 'img_20260415_wa0019_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.img_20260415_wa0020_removebg_preview = this.add.image(0, 0, 'img_20260415_wa0020_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.img_20260415_wa0023_removebg_preview = this.add.image(0, 0, 'img_20260415_wa0023_removebg_preview').setOrigin(0.5).setAlpha(0);
        // this.img_20260415_wa0024_removebg_preview = this.add.image(0, 0, 'img_20260415_wa0024_removebg_preview').setOrigin(0.5).setAlpha(0);
        this.bg10 = this.add.image(0, 0, 'bg10').setOrigin(0.5).setAlpha(0);
        // this.piza = this.add.image(0, 0, 'piza').setOrigin(0.5).setAlpha(0);
        // this.sandwich = this.add.image(0, 0, 'sandwich').setOrigin(0.5).setAlpha(0);
    }


    loadAllTheAssets() {
        const assets = [
            // { key: 'adobe_express___file_removebg_preview', path: 'assets/Adobe_Express_-_file-removebg-preview.png' },
            // { key: 'background', path: 'assets/Background.png' },
            // { key: 'chatgpt_image_apr_15__2026__10_03_34_am_removebg_preview', path: 'assets/ChatGPT_Image_Apr_15__2026__10_03_34_AM-removebg-preview.png' },
            // { key: 'gemini_generated_image__removebg_preview', path: 'assets/Gemini_Generated_Image_-removebg-preview.png' },
            { key: 'gemini_generated_image_1e521b1e521b1e52_removebg_preview', path: 'assets/image stroage box.png' },
            // { key: 'gemini_generated_image_2juaqy2juaqy2jua_removebg_preview', path: 'assets/Gemini_Generated_Image_2juaqy2juaqy2jua-removebg-preview.png' },
            // { key: 'gemini_generated_image_54oktl54oktl54ok_copy_removebg_preview', path: 'assets/Gemini_Generated_Image_54oktl54oktl54ok_copy-removebg-preview.png' },
            // { key: 'gemini_generated_image_85c01c85c01c85c0_removebg_preview', path: 'assets/Gemini_Generated_Image_85c01c85c01c85c0-removebg-preview.png' },
            // { key: 'gemini_generated_image___2__removebg_preview', path: 'assets/Gemini_Generated_Image___2_-removebg-preview.png' },
            // { key: 'gemini_generated_image_hnojj3hnojj3hnoj_removebg_preview', path: 'assets/Gemini_Generated_Image_hnojj3hnojj3hnoj-removebg-preview.png' },
            // { key: 'gemini_generated_image_lanxo2lanxo2lanx_removebg_preview', path: 'assets/Gemini_Generated_Image_lanxo2lanxo2lanx-removebg-preview.png' },
            // { key: 'gemini_generated_image_nvyzdanvyzdanvyz_removebg_preview', path: 'assets/Gemini_Generated_Image_nvyzdanvyzdanvyz-removebg-preview.png' },
            // { key: 'gemini_generated_image_r8ybjyr8ybjyr8yb_removebg_preview', path: 'assets/Gemini_Generated_Image_r8ybjyr8ybjyr8yb-removebg-preview.png' },
            // { key: 'gemini_generated_image_ruu05druu05druu0__1__removebg_preview', path: 'assets/Gemini_Generated_Image_ruu05druu05druu0__1_-removebg-preview.png' },
            // { key: 'gemini_generated_image_y499b3y499b3y499_removebg_preview', path: 'assets/Gemini_Generated_Image_y499b3y499b3y499-removebg-preview.png' },
            // { key: 'img_20260414_wa0014_removebg_preview', path: 'assets/IMG-20260414-WA0014-removebg-preview.png' },
            // { key: 'img_20260414_wa0017_removebg_preview', path: 'assets/IMG-20260414-WA0017-removebg-preview.png' },
            // { key: 'img_20260414_wa0019_removebg_preview', path: 'assets/IMG-20260414-WA0019-removebg-preview.png' },
            // { key: 'img_20260415_wa0019_removebg_preview', path: 'assets/IMG-20260415-WA0019-removebg-preview.png' },
            // { key: 'img_20260415_wa0020_removebg_preview', path: 'assets/IMG-20260415-WA0020-removebg-preview.png' },
            // { key: 'img_20260415_wa0023_removebg_preview', path: 'assets/IMG-20260415-WA0023-removebg-preview.png' },
            // { key: 'img_20260415_wa0024_removebg_preview', path: 'assets/IMG-20260415-WA0024-removebg-preview.png' },
            { key: 'bg10', path: 'assets/bg10.jpeg' },
            // { key: 'piza', path: 'assets/piza.png' },
            // { key: 'sandwich', path: 'assets/sandwich.png' },
            { key: 'type1', path: 'assets/IMG-20260415-WA0019-removebg-preview.png' },
            { key: 'stage2_1', path: 'assets/Gemini_Generated_Image_g3hoadg3hoadg3ho-Photoroom.png' },
            { key: 'stage3_1', path: 'assets/Gemini_Generated_Image_2juaqy2juaqy2jua-removebg-preview.png' },

            // TYPE 2
            { key: 'type2', path: 'assets/Gemini_Generated_Image_xntsmxxntsmxxnts-Photoroom.png' },
            { key: 'stage2_2', path: 'assets/IMG-20260415-WA0023-removebg-preview.png' },
            { key: 'stage3_2', path: 'assets/pizaa.png' },

            // TYPE 3
            { key: 'type3', path: 'assets/IMG-20260414-WA0014-removebg-preview.png' },
            { key: 'stage2_3', path: 'assets/Gemini_Generated_Image_krk281krk281krk2-Photoroom.png' },
            { key: 'stage3_3', path: 'assets/Gemini_Generated_Image_-removebg-preview.png' },

            // TYPE 4
            { key: 'type4', path: 'assets/Gemini_Generated_Image_y499b3y499b3y499-removebg-preview.png' },
            { key: 'stage2_4', path: 'assets/Adobe_Express_-_file-removebg-preview.png' },
            { key: 'stage3_4', path: 'assets/sandwichh.png' }
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

    onOrientationChange() {
        this.reflowForResize({ width: this.scale.width, height: this.scale.height });
        this.scale.on('resize', this.reflowForResize, this);
    }

    reflowForResize(gameSize = { width: this.scale.width, height: this.scale.height }) {
        this.applyResponsiveSceneLayout(gameSize.width, gameSize.height);

        this.createBoardLayout(gameSize.width, gameSize.height);
        this.updateResponsiveItemSizes(gameSize.width, gameSize.height);
        this.createStorageBox(gameSize.width, gameSize.height);
        this.relayoutItems();
        this.updateHudPosition();
    }
}
