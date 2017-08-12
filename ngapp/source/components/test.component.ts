export default class TestComponent {
    constructor() {
    }
    static Factory() {
        return {
            controller: TestComponent,
            templateUrl: 'views/components/test.html'
        };
    }
}
