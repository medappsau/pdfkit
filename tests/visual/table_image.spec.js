
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
                    [{ image: 'tests/images/bee.png', fit: [80, 30] }, 'Text Cell']
                ],
            });
        });
    });
});
