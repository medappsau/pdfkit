
import fs from 'fs';
import { runDocTest } from './helpers';

describe('table', function () {
    test('table with images', function () {
        return runDocTest(function (doc) {
            doc.font('tests/fonts/Roboto-Italic.ttf');
            doc.table({
                headers: ['Text', 'Image'],
                widths: [100, 100],
                data: [
                    ['Text Cell', { image: 'tests/images/bee.png', fit: [50, 50] }],
                    [{ image: 'tests/images/bee.png', fit: [80, 30] }, 'Text Cell'],
                    ['Center Align', { image: 'tests/images/bee.png', fit: [50, 50], align: 'center' }],
                    ['Right Align', { image: 'tests/images/bee.png', fit: [50, 50], align: 'right' }],
                    [{ image: 'tests/images/bee.png', fit: [50, 50], align: 'center', valign: 'center', height: 100 }, 'Center/Center'],
                    ['Base64', { image: fs.readFileSync('tests/images/base64.txt', 'utf8'), fit: [50, 50] }]
                ],
            });
        });
    });
});

