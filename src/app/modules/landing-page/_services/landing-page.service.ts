import { Injectable } from '@angular/core';
import { NavbarLinkModel } from 'src/app/models';
import { AboutSectionItemModel, TeamMemberModel, PricingPlanModel } from '../_models';

@Injectable({
    providedIn: 'root'
})
export class LandingPageService {
    constructor() { }

    getNavbarLinks(): NavbarLinkModel[] {
        return [
            { href: '#about', text: 'about' },
            { href: '#team', text: 'team', icon: 'user' },
            { href: '#work', text: 'work', icon: 'th' },
            { href: '#pricing', text: 'pricing', icon: 'dollar' },
            { href: '#contact', text: 'contact', icon: 'mail-alt' },
            { href: 'login', text: 'login', icon: 'login' }
        ];
    }

    getAboutSectionItems(): AboutSectionItemModel[] {
        return [
            {
                icon: 'desktop',
                header: 'Responsive',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            },
            {
                icon: 'heart',
                header: 'Passion',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            },
            {
                icon: 'diamond',
                header: 'Design',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            },
            {
                icon: 'cog',
                header: 'Support',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
            }
        ];
    }

    getDesignSectionHeader(): string {
        return 'We know design.';
    }

    getDesignSectionParagraph(): string {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis nisl in justo consectetur efficitur. Proin eget hendrerit dui, sed gravida augue. Proin consequat purus a sapien accumsan imperdiet. Fusce iaculis, massa nec sodales gravida, lorem lacus auctor urna, a varius lorem ex non ex. Suspendisse varius orci ornare accumsan aliquam. Sed nec sollicitudin nunc. Vivamus orci mauris, sagittis sit amet vestibulum et, vulputate vel erat. Aliquam vel lectus volutpat ex faucibus accumsan. Fusce ut ex urna. Mauris fringilla rutrum neque sit amet ultrices. Donec dictum scelerisque orci eget tincidunt. Sed dictum ut ex at fringilla. Sed ut nulla felis.';
    }

    getTeamSectionMembersObject(): TeamMemberModel[] {
        return [
            {
                image: this.getAuthorImage(),
                name: 'Dawid Skrzypczyk',
                position: 'CEO & Founder',
                description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                email: 'skrzypmajster@gmail.com'
            },
            {
                image: this.getAuthorImage(),
                name: 'Dawid Skrzypczyk',
                position: 'UI Designer',
                description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                email: 'skrzypmajster@gmail.com'
            },
            {
                image: this.getAuthorImage(),
                name: 'Dawid Skrzypczyk',
                position: 'System Creator',
                description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                email: 'skrzypmajster@gmail.com'
            },
            {
                image: this.getAuthorImage(),
                name: 'Dawid Skrzypczyk',
                position: 'Web Developer',
                description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
                email: 'skrzypmajster@gmail.com'
            }
    ];
    }

    getPricingSectionItems(): PricingPlanModel[] {
        return [
            {
                name: 'Basic',
                storageSize: '10GB',
                emailsCount: 10,
                domainsCount: 10,
                supportLength: 'Endless',
                pricePerMonth: '$ 10',
            },
            {
                name: 'Pro',
                storageSize: '25GB',
                emailsCount: 25,
                domainsCount: 25,
                supportLength: 'Endless',
                pricePerMonth: '$ 25',
            },
            {
                name: 'Premium',
                storageSize: '50GB',
                emailsCount: 50,
                domainsCount: 50,
                supportLength: 'Endless',
                pricePerMonth: '$ 50',
            },
        ];
    }

    getAuthorImage(): string {
        return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAFKAZADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9xt9OqOnb6AHVJUdO30AOp2+m0UASU7fUe+nUAO306o6dvoAdRRRQA7fRvptFAE2yoru4VdqjPzHbnsD70bjVLUZTE8A58ueQhj6ELuP5UAYPxF+KWl+BdGutV1S9t7DTbOZLZbmVtqNM5wsfruJwMkYBPJGDjw3Ufj7H4q1D/hINUu2bQ7yN7vRdFgkFrcXliiMwmuJD8qrP5e9i5AjtRIWwpYj5K/4KRfG7xR+0j8RfDngHQbqOPwDoOrWD65dW5VZr7Wb1nuPs5YkErFYieZlUFWMqcjGRga9+07B4u+JvirxlqV9p9v8ADnwJpkFh4aNvCLi3Sc7IFn8slTM935M4hV/kWGKEOuC8dAG1/wAFBf8AgohcWdpqngmx1aIR6ootNZ1XT4zFGWMcbyxrG21h8ren+oUpw8u4fCfiH9q268Q6xo+lgyXfhXw/uhstOjAgju8weS0khzvLFcKAWARUUIRli3D/ABn+Muq/FDxPeX2rTbrm+unlk3ldylyzMzMD13N2zwkY6IM+daj4kjhhkht5kNxcNumnkG4t9B2oA9A+I3xw1LxLqc+rXTRXOsT7EWZUCQ2aIghhEQBDBoogql85c7sBFO0UNN+OEnh7wjdR28SxyahCILrUGLPNcRA58mI5yqM212LZbK7dxDMT5YdV/wCEi1e3X5pIdxESqceaG+8T7elVvE3iWS6v1t7Nlis7T7swwcfQdKAOquviVcamzeeyxwebj5V/0iUj7oU/dQe+M+1EHj+6TKJHHDHLKGaRo9zMf4c/3wPQ4Fefvc/YoXmd90Dje7MfmmP9PwpujeKZ9VtvtYjmj02ASqjo2TKT922GcdO7UAd3q3xAiupJFuWhtrcFmto0h3T3DfwvuGenYHhO2axLjx/qxuZlt7r7PJIu3ymIZ5Pq3RfwzXIz6neSpHIpZpH6uiBd/wDh+FSw2ck67JI1aT+6o/8AZqAPUfBXxV1Xw7pPl2+o/ZZ2bc0yLiT/AIC4CuvXsx+6tdN4Q+Jq27NNrENzrU0bq6WwnCeeP41mYktIG77ia8N02a6nl4maRV+9tb7n14rp9E1WO3/cx7ZJv+egUk0AfUGh/tu+MND8TNrdjeW2l6obWW0tYoz5cVjHJ9+GLdvZPM/jwdzd2aq3iv8AalutZ0PZquuXGvXqt9pxJEWgjuAybJHH/LTYqnbkBR/CqV85apdTTyyJYbrrUlfYVKbVQf3iSfvUml281hLHHqVxMWbqIpNv/fXH8s0Afb37C3xk0tvi9DrXiG+81bxFt7ea5DtDbjO5jOW3SbSx/wBXG2MKvNfsn8Hv2rfAd34TW4h8QaP9htYsyXKn7JYqfRZZdmT+FfzaWPxAh8JGNle3hFqv7plBKofpu5/Guq+GHxZa91W0FxcTXVtC/mKkyqyIf+uZBRvxFAH9P3hzxRp/i3RbfUNNuo7y1ukV4nhPmCQN6Fcg/hV4OrIrKdysN2RX5ef8E5f21Le+8S6f4bu7calql1A7R28btJHaQgZBWOVj5OMgHdjlgOvFfpf4e8QR31hDJM8Ku0fyqjBlP5UAa1FGecfxeneigAooooAKjqSo6ACiiigApuynUUAR0UUUARv8lFE9FADdlNqSo6AK9FN30I++gCZPnopsb7KdQA7fTqjp2+gB1O302igB2+nVHTt9ABhqMNRvp1ADt9G+m0UASVzXxYdX8MSQtc/Y0voZ4WnzgW4MNwzyZ9QAv6V0e+vF/wBvS61KH9mrxdHosU02ox6cXgWP72HmiikA/wBryi4HuRyOtAH43/tH/ExL79nL4d6CrxzX3xAutS8T6obR2jWzX7WthYRQ9JBm0sigY4OycepA5v8AaY+J0Hg34SaL4E00W1nCunWF3qkUcYWSK5SBw6lv9khiv90ua4qz1RvHvjG88UX0sraToM9rYWdrhVlt7E7ZEkHOcR5wf9pu45rzT4z+J5tauJru4uGeS8leV426szbW2sfZdw78n8aAOI8T6wU2+Xt3EEMxGWkYdq5/VNRFjYLIzlS3cih7mTU9RCqrMLdmm+jEqAD+DZ+gNcV4z8VLc6s1qzMtpCu5iP5CgDWi8QvptrcaiZA0jEWlqi8bfVh7Duak8NWDalZvPcRyR2wG49fn+lc/9kvPEeu6fp0B/jk84AcQoBmVvwPH1rpPHeswaXp9vpFqZLiCwGyGAPjzz7mgDFvr2bxnrX2GZhaWUJLcdUTsT7HtW59njvvJtcGPS7FPkVGwoi/2v9r361J4f8KRWllHNesscl0gluyx+6F+6g9vWsTxZ8S49GtJLTSY7d5ZpwY4wm7dIf8Alo3+z7UAaOq+I4dMufmkjh+zptWP0Pqfb9faneH9OvvEsB+0O1npONyOesn0Io8DfD43sUmpat5l/fs/2iG02/Mz/wDPVuwHtmuonSHRbIzapLHdTbMQWcLhI4z6ZGQf+A5oAfpnhy1exh3+Za2r/emHJl/KnwT2Olv5Vqsi/wC2h3mq1pHca9Gl1qDGxsm+7OP3an/dAz+uKSdbXTrFnfzo4R0EbbJX+nb9aALFx4jeCyEcchs1Z/mZwHaY/wB0H1rDuvFElxP+5dh5Z27n6t9c8Vjaz4wj1W/RImWFs7wT/q4R7nrv9sY96lsNWhs7oNZxSXEjPuku5wG/KLO39aANTT9D+2ah5l3JJD5f+sfOSPw6V1vh7WodFkj+wxXM3+2eV/SuUhu1lj/fs7K3Qd2+vartjr8NwY4/MkT2ibYv6ZoA+tfgR+05H8FZNOm8K2MeleII4Hj1S/nl+1NcFzvZRCf3Ua7z3Dcqr4z8tfpB+wp/wUxvPHl1Y6fqUN1N8+2TUE0pQjH+7HiMkn6gD3r8X/D90ptIVbzo0X7pC+Vj/ePWT8QK9P8Ahxrum6BfWc0esT3EcS7TbICuxf7mfkX8c5oA/pN8FfE3S/GkMrWcyusHMrGWPdEO27DHbn0OD7V0iyb1Vl+ZWOFI/i+n+NfkT+xj/wAFLNE+HulfuNEk1TWLuOQW1pp0ZjiZh/qj5jMbdWHd0VT7Gv1G+CPijUvFvw00nVtaSG11LVbQSS26SqVgBXd5KHOCv+2KAOyooooAKbsp1N30ANooooAKKKKAI6KdsptADZE302pKjoAKjqSo6AKdEFFEFAElO302igCSiiigB2+pNlQ0u40AS7KNlRbjRuNAD6dvqPfTqAJtlNpm409TuoAGO1sH868h/bI1W60b4F+ILyx8pryK2MsXmkoJD50JRc4x+8aJ40PRmkj5wwavSPGurf2B4cvrry5p/s8Tz7YE3yFExvYL1OMjjryOK/JP9pD/AILR6p4X8U3eltb2vibwvdRajYanYyxbrfUVYOsF3CxIkj3KV8yIL8pLlMErtAPzwufEFx4a8QahoszNb7zNbPG8e2V4HeN1Jc9gUQfRhXA+Kdai1HxTIs8m6NrvewX+E7Nv5Vo/GbxHYzfEXVtS0Vr5rG4mSaIXcvnssTf8syfUZ5x/dXk15093Jd+Lf70NwN5PpQBY1yd7bwnNIC26adJC68MC3moP/HEH44rzfxBJFH4sulTbHE1xkAnK7fSu98ba5Dp/hlbUOPMa4hb22iA5/wDHmNebf2adU8ZeTO22GOSQyHuoTqT7HtQB6H4N0uPTNAutav7hY7zV4cqM8raxnezfWRvzFZfgq2k1/wARnUJnO5lAjXH3T3x9O9ZviHX2vtHuFtVYK0MNvCp52Dsg9vWnW+rzeG/D7SQ/LcRr5cYP95vvn6CgCx8UvHy3WpPpVnwLH5JHQ58z2rT+FvwTuJzNruoYt4yitI8hASCMfxe386o/DjwVb20japqjlDGPNIcfNI394/7P6+1bfjj4qNqWmraosLWNr/qLQfLGD/z1lPWQe2KANXxL8Q006GbTdJi8xZRhBvP2i7X++eyRfUhv9mqVlHaacbc30cN1qHlb0gjOFeT/AGE6IPxrmNJv5rqWSZSrT3TEyzsNocjoT657DgV12g+F47S4klVtqzQLJNdy5GUP8QzyB9OfagC1Lcy6hcRSzv8AvF/5Zt/qYfqK4b4ieP47rUWsoZ1VUbaz+n+6Ov6VsfEfxwsdqdK0WNtsbbZpSBv/ABri9P8ADcY/fSrJNKz7iTtDf99k5/SgBtpcPNI0ax7oWfzDgfMx966zw7Z3Mjq3ktDu/hPQU7RLW3hgVWdWkb+GJcn9cVuaNpmZi2Tbq33d2eKALGm+GZJ4V81ZJ0X/AJYcD9a1i9roJXbBBCy+vNV7aymll8uKVmH99Cf6inTaZJbiNktRIy/eZiWU/pQBZtlvtYulmW1s41XrLKd36bq6OC9j0yGONpPtFxJ99mfdGP8AgNcbLqGpXFu261VVXqkcQ5/MirGiR3UMUciqqtJ99S2WWgD6Y/Y7+FzfGX40abY3Wtra27jL3C/vHU+kUCMNx+i1/QN+zR4R/wCFefD/AEvTmfW7xbe3jiS81IojkbMfJEM7F/2OnvX82X7NXxDm+HvxX0bxBfeI7jSX0uXzbdrEBbmA+iOBxX7r/sWf8FVvBP7QssOh2zeJmv7G1Xfe3cDyzXpHp5avigD7Goqvpmpw6xbLLbtuVvarFABUdSVHQAUUUUAFFFFABUdSVHQAVHUlR0AFR1JUdAFOiP5Kbvp1AElFN306gB2+jfTaKAHb6N9NooAdvo302igCSnb6j30b6AJN9DsQjHptG7B71Gsm5sVz3xR8a6b4N8LXM+qXUlpBINrzKh2x+4bhcfjQB8lf8FK/24Lj4S6e1loOrXug67Z3CPayxxw7fNGdwEuzawfJyOnMn98bPxU/aL+KVx8Qtd1i6unhi1C7vmnu44LUQWlzIf8AltHF/wAsj/sBiPevr/8A4KLfGy48Z+LtSs/EF4mowSXBfQ9RtoVB1G0H/PUA7ZPqoU+1fB3jK6ju9Wl8uZpGR9kYly7lffjrQBztxbNe20ksa5jkDtjptdvUHnA+lc1asmm6qhlO2Nv3aMe5rrLvUVaTzoVYeZ9+Jhvcf8CrHutL/tF9p3NDIvy/L80RoA5/xnosmqW6xhSZldD93g4b/wCJ4rl30G6jv9UmSJpGmi8pz6A7t2P++TXtuiaJ5aR295C+9V8tjtJYt6jtioofhHcLqF1HbrJJHMNy7QW/v+g/2hQB41oGkSRPuOP3crOqtnlv4fwFaNtpu24Sa7XMNplYwf42b727+lezar8D5vDdrDcNHIvJf5kPzjtjjv2rntR+Fd5qVwkklu8ce/cyHjH4UAeaeIdeku28nO5F+Ztvf/ZH+zVPS9BYK2o6lG3kSjMUZ4Mp/ukf3a9XPwP+ylf9Hbd5m5s9QvuOo/HFM1X4bTa7eRx28f2hYE3bUB2x+3TrQBzPgvT455TdXke6FWCxxAYHy/dz/WovHHxGkmlmt7V1unZldmK7v3o7gf3fauv1P4SX1lFtk+0wxMvyqjEsx9hWTp/wIu4545I7S681m3HJOP5UAeZpHcX92ZFjkkmkfdIAMb63NN8PX0q7WhhX3k+YV6fpXwcvNNOZLW6jH95YtzVQ1rwtfWMnlxWcyr/00U/0zQBztt4abTljaSTym/vEbD/49irEt5axMFa4mkdOqh+avBLy1Xb5Nw3ldSqBc/8AfRNRrPcW140zabZlW74GaAJLHxD5UmYbeZovV22/yrasNft412MzWsn9wuSK5/UZFv3227RrN/zwWU5/lj9ayJWuy/lpZSbv7/nA/wBaAOzvNUae6jVfOeRuqkBf61nzNNBcSObVpJG/vPgH6Yrnz4Y1K9ZpFtn3/wALJc8iprPwzqELhpZLmFU+6S2fzoA7/wAHPE99DJNFEzL1CfLX3b/wSv8AHq6F8f8AR7Wa3EMd2/lea/mKIvrtIr87NI02a2vFa4uvmXrCdyyfliv0p/4Ik+F/D/jH4kR3N5fWdvPYlTErxQzElu7KQG49gaAP288NRbNOhVf9Wy7s4xWlVXR1WLTYY8/KqbatUAN302nbKNlADaKKKACiiigAqOpKa6bKAG1HUlN2UANprpsp1E9AGXUlR1JQAU7fTaKAHb6N9NooAdvo302m76AJqKg3GjcaAJ6Kg3GjcaAJS32cNI3Kr6V82/tlfHFdC0qaxW/s7W3C7JlvtKmkQL/vqDz/AMAr37xvqUmk+H5pV42ruw3yE/Tdivy3/wCCg3xf8SLPfx3GrWIa+l3RW8VvI0ki/wCyFJ3fhQB8Q/tA6q+ueNNUnWeO4sHmZ3S3YqqMe/zYOPZt1eJa1bzf2w00eSrPkHZ81dX4u1e4vfGF5HeBppZF+Uspi8w+64z+lU/D/httavvKih2sBubbKWC/XigDlbTwfNqt2Zo4WSZv9YOyV6d8IP2b7rxbqEcccM8nm/eyley/s+/sp3/iHULea50/ZbyLucs3+sr7d+B/7Luk+E7SGb7NJHMvU7uKAPl3wH/wTXm13T4ZZI7qGLb8ys3U/XrXqngz/gnLptldxyPaSh1Xa0scm1j+HSvsDRvCUNhaKsKyNt/hJ+WtK00qRfuqo+q0AfHfxO/YPstY0RPMs7jy4SIoAh+Ylfu59vWvFb79hhYPFkk11BcTEffcZGfoOlfpz/ZK3cEccqlljOV+tc5qHwzh1O+2rGW3ddo5oA/MfVf2WJLq/azj0eZdOV/LYscSsf8Abfq9eg/DP9hy51SOFI9JexjUbmkRQWd/f2r7ot/2WtNN5FJcGWXyTmJScCM/+zfjXV6P4Ei0mBYY49ka98/e+lAHyDoP/BOjQ7RPMns/Mu2/5aMdxT6DpW9pv/BPHwrppVltnfb/AHm/+tX1lb6H5Ee0hX/2inNEmiecmFjYfUUAfJXiD9i3RkTFnpckn+7hP5Zrxb4n/sKweRcSpayQ7emwk/0r9HB4aWFchWH0rD8S+AbfUdPlU53SdARQB+LPxd/ZevvD9/cb1uPLDbQmzDN9Ox/A14N4i8BSQvcL5EiRhtoLEr/Ov2Z+Ov7Oc2q6a3lWjTLv3FMfc/3D1Wvif42/s2yLNdLGkiXCvu8t13LQB8MXPg2O0m4huI5P7oP9aytTgk02BWMgWM9SYvu/XmvaPHngqbQ7q4t7uOSORfuyY4Nec3mk3FhPNHNGxM33UCblf6UAcnaeJ9sixrxuGQwztJ9PrWhY67eXVviNneMfewclfrRqegW907K4+yySy9Fc7N/+ycdPriqcmh3EFw02nzBriM7dyt9/6jpQB02h+K4J91nqTTwooz5J/eQlf7wU4OP+BV99f8ENfE+neHP2uNO+0SXUkeoW7RQ3BC7bST+HLd8fSvzgl1qe9kZbo+WynIkdAu3/AGTnnbXf/s6eIJPDXj/TWttXa1t1l3mKN3h2t/vAnigD+tjTWxBCvmAlwpAAzkHpz0qxXk/7F/xCbx3+zp4SvLjUrC8updPjMht5hIkh/vBjg4+ozXrGc0AFN306o6ACiiigAooooAKJ6KJPnoAjooooAjonoonoAy6kqOpKACiiigAof5KKbI++gCPDUb6dUdADt9G+m03fQBJvp1Q76k30AeYfta/F6P4N/DHUL5bi0jmiASNGmSNyT/suSa/HL9qT9uLxh4s8Y6uq38Oix3L7ZVtokkmZf7pcr97/AHdo96/Wj9u74R3Pxg+CN5plrrF5bsCrpBCkapgdcllJ/wDHq/E39p/4PWfwq1meG416PVbuOTEkMOWS3/66yoCm/wBlZh70AeQy6jN4v8WTXFzPeSTSdLmQBpV+hzX0B+yj8DJvG+tmdLWTyETbux9/618/+E75Jb1izR28MDFVxyx9Pz7V+kP/AAT48Owy/DWLUNqzNdLuReRj68UAex/B74YQ+H9JtRhVkhXaBGu5f1xXsmjaRBBYx8K31Nc1pMIjVdwEYXstdPpZV9vXavegDa0+xWRMQk/jV7+yyn3dzfSqOm6hHbhdp+961ebUvPXIdl+goAqwx/7TVqabYZKzYaNmrNtP3siqOrevat6FFNvGCzfhQBYjtDdyd8etVNT00yYRQ+1Pu/8A16t2+6BdqswHofvVaiIVyZGx/X6UAYtpo8rHHzNWnb+GXaLdubHpV20VZGVpG8wN6cVpadcQRTeW8LY3bc9qAOdn0jau0hh+FZt1YL5u5lrvrlre4t/9r2FYer6dGse4MuKAPPvEnhuG4jZQWAavC/jZ8CLPxPYTTxQmK4H3nx1r6Ru4FkLDqV7VzfiDSY5LT5vut196APyd/ax+CCaLLPMsMkcy/wCrXGVevkvXbRbeKaEK0JtV3GFnJaP8a/VL9sv4fRalo18T/q1O2OQDlK/N/wCLvh2PT9YmuIo2YB8TEjmQUAeO+KPD5a1EiNK0MTZlgKcxe4PpXG3utz6Fq6zWcyeVu37tnyyL/eHt9a9D8Vai1lqMskTOZdm1kLfJOnt7/XFcBr2mrcjauxYVbKqP4R6D/ZoAh8Sa0uq30cqqpkbpM/zK31Fbfw8nmt9TXy41ZtvMLdCfY9a4S4Robt1Vs+Sdpj/u12XglVuZ4JCywvb/AHm38igD94P+CEHxi8Sav8OY9FuhHp+k2scRtWlnkZ3U/wAKHcV2/Vgfav0wtz/eZa/Jv/ggVqLXcc1i1yzSiEyi1eMG2uFLbQ6jORKvUr90D+I1+s0bbVUlVG7t6fWgB2+m0UUAFO2U2pKAI6KdsptABRRRQA3ZTakqOgBuymyfPUlR0AZdSVHUlABRRRQAVHUlR0ANd9lNonpu+gA31Hvp1R0AO31JvqvvpNxoA8w/bF8Y2fgT4NapqF9fw2MYHlxyNnZI/wDdCKCM/jX4F/tUeO18Q+Kb+4guGkgedkWQp1A/iIGAT9RX7pf8FB9GtdT/AGZ9fmvrU3kVmm+ONJAoR/731r+fP4kC51nxFLIwkit8u0cYyAwP8XI6UAczouqeVN5cf7xiRIfcL93/AOvX67f8E7NP8v4DaXJM6yP5fYYr8hfDSRWupSSIGZopNjD09q/XD/gn1etH8B9LjY4k8ndt70AfQ+zdc89PQda14HktLfaysq+h61g2V15t1u2tu/SteErPHudXZvc0Aa1pMVZGbYqr1B61p2155SYaT8hWHpcf2d/3fzL781obKANiFNh81WUq33QOorSt5WaJfmHy1hw/ulj2n5ferStKsfANAGwL1poWDMvy/wAQ60kt+xdVU7iv3NzD9ea55LidAy/N81Qm5UXQ27W8vrgUAdtaXnkxLtbhe9XoNQ85OT8u/dx1rlbBrjy1hZW2t/F2rd02zaKL51agDZmu9o2x7Sfeq2oTYs/mCn2FMKCGX5TVPU7j7Hb7pWG72oAy2uFikkdw26ua8TahFbD5iQtWNe1CbaxT+LpXKa3q+bTDKzt/eI4oA8R/acXf4Zu5Nu6MvuK46fWvzN/aEtxpN9JNG6srSqpX+H5v881+qXxJ0lfEGi3FnIu/7R1x2r8wv2sfCdx4Z1m8tLq3liVZ2ZXP3T/d59qAPn7xqkZk+2QqrIE2/wDXOuF1q4itQ6tt+Vlhz/eQnAIr0C3ha8gubHeGWbpkfyrz/wCIFtM9lsljMVxCEiCqBlsPu4oA4XXY5rLU7hVVvN3bh/ek+tdx8MJPtrRqkMbSR/eRk+aT61x1zLLIUdcyTR9Gbqa7v4VsLDVbWbjdIu4k0AfrP/wQf8E+NNL+Itnf2trcLocdrPIrkjylLL0znPDc9K/ZyDc9qpk/1jffI6fhX5o/8EEPEFtrHgm8spIbr7dYhm3SQwpDIh/u/Ln8wK/TGNNkeKAHUUUUAO2U6m76dQAVHUlR0AFFFFABUdSVHQAVHUlR0AZdSVHUlABRRRQAVHUlRv8AJQBHPUdSSfOuajf5KAIWDKuai3GpppP3eKgf5KAHb6N9R76dQByPx28L2fjT4Y6ppeo27XFveR/PGiDd/OvwN/bB+GFx8PfG+vImnzafvv2hsYZJN5MS8Mq9sK3yn3/Ov6Hry3a807bhY9y7SRyTX4l/8FYdK+zftBX6+bbr9ouJZrexUEtbQrkbjkcb+GOM/MR9aAPhPS42GqNuVmZW8xjjAkk9DX6w/sHpJbfArRZpuBcAbHH8QNflhruotpniNY45I1Uyebgj5nb2r9bP2VNPHhz9nnwiqxyRyS6TBMUVC/lllUjgDPRh2oA9q0q5LI3HzL61s2WpL5S/MvzfpXi3if8AaR8O+Cbl4LvVrZbi3bbNCjBpE/4D1/KvJvjD/wAFQPCPgeGQWs7ahIvAihgYvn07DNAH2mLyMLC28Rp3YDg1fsb6GZc+Yo+917Yr8z3/AOCx0l1YtCumtCrf6m4ByU/3gT/LNeq/Av8A4KHyfEL7O3ltJceS/nKFGwk9Mc5/lQB992NrHdINythG27uxq/PY7rTA3K3vXlfwY+LqeNfDdrNNMBcIv76MAjafXnFekS+JfPTb94+i0ASWmjb5uWqafQYXd5GVXU9uhqE6q0SfN8re5FeT/H/45an8NXg/s1ftG642hR96Qe1AHtekywiJVjYyBO7Dr9K1LmXZbF2ZlVe+Dn8uv6V+enjn/gpn4o8GanrEdrp8skNnN+7KQH5h7Zrw/Wv+C3HxAaeTz9PsbWAnaGlsnDn/AIECT+lAH65QajDLDu81Mhdzc/d+tZPiHUfss6rIu7f93I+9X5Gn/grv8Q9cZcvYw87iscbbinqeOlekeAf+Cmvizx3pf2C8vl/eR7Y5Av7wN7UAfoNrurQ+U3knLL1UjkVxviBY7+wkiaV42Zdy7X6V8xfD/wDbQ1SWPzNU3X0cH8QcM3/AtpP9a9N8I/tJaH42vfJjvIrO6MfEcqlSf6UAdJqaNN+5YBB/fHWvk/8Aba+Ar+O/Dd0Vs5JLhX3I1fU11P8Abk8xZMr/AHweKwPEcK6laMjJ53973oA/FHXrOfwp4vk0++WZXt58AkYb6fWqnxO0eG9sI7llIdSHV8/eHf8ALvX0x/wUe/Z7HhLxYPEFmhFvdzgPLj5RIeh/3f8AOK+etYg/tfwJtYq32cKqn+95n3j9BQB5BNataXXmfKSei9zXZeA4EuTs2vvhbjjqPauduLRry2aONcyWv8Xeui+GEs6a2qyKF3Q/uwT0PvQB+9f/AAQP8AT23wWm1jULR5Li4fZaXZl3CaL6cc/Wv0Vr5P8A+CM+j20X7EPhW8j8v7XfQObjZgnershUgHCHKn8K+sKACiiigAqSo6koAKjqSo6ACiiigAqOpKbsoAbUdSU102UAZNSVHUlABRRRQAVHPUlRyfPQBC77ExUcj76dJ89R0ARz1HPUk9Rz0AR07fTaKALH/oNfkF/wWb+Dkmg/Gi78U3kv2eTVLiCC1C/MzRqMy/KOQpKoB3JPIFfr55xr5F/4Ki/s0Q/FTwLLrEkcm3Sh9oZl+V5DkNtLDJA3KvQdM0AfhF8Q9GuJPE8LLD/pVxtEcYPIJO3Ar9Fvih8XZPhz+z54c0GyvLWxktNItIZ3lJmfcEReIgy91P8Ay0FfH9p8Przxj8evDenmFftGpa0sce1PuxCT730r71+M37OWn6r4mVY9Njnj37DkZ+UfdxmgD4q1HwP4w+Lmqs9pFqUiXj5jJhWO3i/EMXP4mtz4ff8ABPrWtT1gNq9wYYVbz2llGGLegGcmvoT4k+MdD/Zp8KyTPb+XJCfIgtnm2s7+o7Y/GvA4f2kPGn7RurLovhCNtSNrJtub4Msen2Y/2I8+Y344oA6bWP2Efh/4cuZXu/E3mSfxxmVfLX/gWcVH4G+HXh/4W6o39h6ozKsfWOUSD8wcV4roHxH+Iup/Eu88O3fxM8O+B7Kzkmhk1C903Zal4t2VIVJTltvy8c5GcV3XwGs/Hnxx8UeItF1Cz8M+Ok8Oxnz77TGEEk/7zYPKnXajZPI4HFAH138B/jPBpt3BapeMgCbJBK25pW9fTH419N+CfGj6oY5Uky0y7gD2r8v9Ta6+EfiiS3XU2hvNOcNPpV6yx3cGeu5c9u+Ca+2v2Qvib/wlWjWM07NvaPow6UAfTnkah5HmSSKy+6V478XrKPX9UWS4hZ2tzkY6KfavXNc8bRx6H8rKGrxvx/r0l1FNJbFZCzbaAPC/iP4N8P2t3JNcWsc1wW3GAFst+teM+OYNDbV/Jh8J6PcLC+7E4IVP97BOPxr6C8Y+DUXQvt0jT20jS/6ZNIufJ/2R6n9PevLvhn8O/BHjf4g3ln461AWegFd1vZi4aLz/APrpOgJb8aAPKoPHPgDw9ctJq3/CDaPA0pjkfy5ZMMP4AUBBH0Ndd4Rf4L+O5USzvtJu7rON2lajtnUbd2VQ43DgjjPINWv+CoH7MXhUfD7wjP8AD1dHXR7XfA9vpaeb5Uh6SOVBJr5JT4A6l4v8S6Gtr4Js/DMluwhfUtOF5C8ylouXa4LGL5UcfuQv3zQB94aR8BfBnjSb7BoN5Nb3irvuBNOTMF/vGMYOPwrpNA/ZSm0K6U/2hqEkEMfD+WZGz6Zxmvm/wfqXirwb8RUsbmHWda8P2Z8uw8RQ2jpqFuf7sjYDSr9R+FfZXwV8dapfWMFvfFbtmXyYrlB5RkT+8wLD5v8AOaALngKwuNPtvsc63n2f/nrIu0frz+lbWoW4+zTMo27W2lR1rs9P0xLn99KszN/z0J3r+VY3iXTRZaq7pt8uZePY+9AHyX+3n4KXxL8KNQjb55osTI3ddvXIr869SsW/sVYdrNHHujHbK/w/iK/V/wDaG0Aal4W1IeS7maFwRj1r8qtWiXTtY1zS7jMU1vOzwhj2HbPrQB5OLyRNXk3rua3bbg8eZ9a6nwvof2rUraUKVZo+GB4NULbwub3xkytu2yPk47CvUPCXw6TQb2yLM25yYpo3I/d46MOxU9qAP3s/4IiS7f2D/DUNwscc9nJdeWyDb58a3D7nk/vEbgDnFfYlfn7/AMEWH+IHw38OXnhPXPDF1b+E5YRf6bqVyR5kEjHaEXBK3EUqfNlCTv7Y5r9AN9ADqKKKACpKjqSgBu+m0UUAFFFFABTd9OqOgAonoonoAx6kqOpKACiiigAqN/kqSo56AK7/ACVHUk9R0ARz1HJ89SSfPTXTZQBDTtlGynUAFU/FXhu18VaLNaX0KXFvKMNETlXHvVypB+4f1WgD8h/ip8GLDwV/wVP8N6LY2q29vZSLcsq52qzLJNtXjoFZBzjkHtyff/itqEwVpIbeNpFk7ybP515p8d9Ykuf+CxC7nbbbGSJm2YAItCAeeoC4fj+EjvxXsOoeGYdU1GTz4/PjD7sSru/rQB8rfEP9mm1/aH8WCTxZbzr4ejGRIbgou71BODXWeEP2Dvhb4Xk3aX5umNt+Vre+KOp92HX8RX0BdfDaz1swxuFuI4v4HXdn8OlMm+EenQRMqwKxXqwiG0/rQB89t/wTr+Eh137VeSNeNcSNLM012GR3+XDfX72fqK5rVf2ZvDPg65uIvC7QW7TsN0dm7mZgpyuGUKF564U19MSfCDR3A8yzt9sbbSADisHXraDw3OyaPp8cd2p2mSNQDQB8wj4D2PgK3+3SWMcepXDlFjUmPcW+9kj5j7Zavo79l7wY+iaVattWNjDuAx0/pXI6z4b/ALY8RJDcSSSyTS75mP8AGPf+7+Fe7fDbw5bxaPDaxqVt8YVM9B9aANLXi40jBwPfNcJOh1a1ksWP7wvkP0zXoPiu2t9Ls9iu6x7tvHJrk5NNj8sXUHEifdBoAvPZWOr6DGmo/u5VGEj2ZjX/AGj3LfUV474r+GdxDqlzG+myNbyN8z25XbKP93bx+Br3TwxYfbZYY5l87d/eFdYPBukCJditE38SE5zQB86aD8JPCl1ZLHeLNbsH3lJAdp/BcCvVfDemfDbR9Lt2+ywy30aJGzYY7wOvBJrotS8PWNvHtWOHH98rmsuPRoZZVit7e1h3fx7M0AVb/SfCOpxPLHFGkecuFjcc+zf/AFqi0/4faXEkMlvZr5LfdBG4R/Su+074fwy2ihn8z+8u7Cn9KvjwdDZbfvRr/CvYUAYehadHZW+2NZlH90vmsPxjDGsLcNj+H1rsL60ksB5nyszdNvQ1yfip1ubmNGBxJ09qAPNfiHYs/hm4kZGZpF2gYr8kf2lfC0mmfH7xDbrH/odxK7tH/wA8mPofSv2M8cWEjaJJlWLe1fmb+1d8KXk+NOsXMdvMyK+QQf8AWDbuzQB5z8BfgrN4p1+wuI4X+z3oELTYLIjHoSfQ17l8Av2al+OX7V2g+BJo5o47W3aKaHy8Nb+UhYNn+LoQff8AOvYv2EPgeNO0fR45D5lrrVtFMdy/LHtVWQj67sfUGvrn9gH9krUtG/bR8dePNUtV/s21f7HpM4HzxeYgaQ4xg/Mi456M/tkA+1fgj8N7L4S/Cfw74Z0/zPsui2iWsAkfeQF+7ljz8vbGK6qmpGIuF6L09qdQBInz0UQUUAFSVHTt9ADvMX0NR0UUAFFFFABUdSVHQAUT0U2R99AGTUlR1JQAUUUUAFRz1JUcnz0AQyJvqFhtqxTZNrUAV9lNk+epKjoAh306n7BSbKADZUkSbqbT4XoA+Ffij8IoL7/gojrOvTW7+fY2kNzabyZFiEyorMeOQU2xjP8Adf0GeqbT1RFbfzu2t7mvfPHXw2X/AISu+1mzTdqOqRxwyOwG1I4yzIoPpubn2FeJZE8h2oCok5NAFKRfs9r+7Hltu27h1q7pekSapLG0zMd3VT8oqxZ2JvJtskbff3Y4roLSztUtlPltuXrigDk9a0xbOGRTHJt29gOv5153rthJbvJJHAI/m3b2PNev+IrSG6t1ZduP4jvFeRfFTxrY6LC0MP75m+6g+830oA4O4ZRq0kilWmY7SR0Fe0fCp1e0h3fLt9a8p+FXg641y+uNQ1CFot7bkTtXtHhzw99uuFhhjZCv93FAGf8AFIvJZsYYWba27gVwOla3JHqLRzfKi9jXsfijw3cPZsrSMm7vjivGde0u40vxHINzMo9RQB6V4Csf7SuPMhkWRVXcCD0rr7vSpGPls4B/v45ryHw94h1bwbdwzrteGRv3sZQDAr0iL4q2t5CsskkcaMM72+6p9D70ASXPhqSe4ik/5Zr95exq5p+h7Cq/Z/u/nWt4d1y11S3WSOaJ2boP4TXQWGlW0h+X5pPUHigDDtdBktIcqXok3MF8xmbZ1z2rr5bKCK25k/IVzGovFHcS/MFVvvcfyoA5/U78rdW6qC0MzbZPWP6Vy+r2hFv+/wACRemK6TVAsN7tXlSo3L/ErFttcz4lmm+2blXfH6HrQBj65ZR3NpJnp6Zr5o8bfBy28Y/FiT7TFtsppNtwwydkWNmR+P6V9OSW6zRseqt2rjrzwjfXGka1PpkLyX13L9mgRQDld+7d9KALHws+D8Pwo8K6FalpI7jT4DAquOPLVm8tv++doP0PWvsv9lyOD+x9YuI23TNPG7bW3BP3fpXy+vwzvtS8MWsl9dXkF1GNzsX+6f7h9q+q/wBmDwBJ4T8ENcTeZG+rOrKr/e2BNpf/AHaAPSqKKKAJIKKIKKACiiigAooooAKKKKACo6kqOgAqOpKjoAy6cj76bRBQBJRRRQAVHUlR0AR1HTt9GygCPZRladTdlAEeym1JTdlADamh21HsqSNNlADLrSo9UkjWYZX/AGTg18oeLZF0vxJfRr0ju2Gw8DAr64h++p/u18e/H7dpvxM1yJAVC3JcfRlyP0oAm0zWUnkyyv527bjNbU3ihYoGXK/LXmtvrchG5PlG37x+9mjWfHTadaN5xaNY9u+Qp8rZ9KAKvxi+KC6JprCPZCittyB1+lePeB9Uk8X/ABJa4vGby4bfdAJBtBPvmtnxBLL4+unvbiNfsCyZiHaQeoHpWe3hOeG6jvLeZkYjCBxuUD3oA9K8PeJYdFnW3uGVYlO1Dk4/GvZfh9JYyRqxkVImG7zQ3Ir4n8Q6R4qS7+3299OvlvuKsv7s16P4E+O91YaNDbXX7ubbtlQng/SgD6D+InxCsbRWgt280Doc/e+lcVHcWXiO9TzJI1k/iLEKB+PSvMfGnjebXBBHp0bNNcdMc4+mKPC3w58c3cSxx3GpQyTDJ+1OhQH02gEZ/GgD07xlHZ6RprXCgyeb75x+FXfDvwsa78E2+dzvcL57KeitVHw58EryREbWL24vLjsR+7z9AMivVfDVsunRR2zyMuRhlxnaP5UAeKW/iXUvh34haw1DzFt1bbCxGFevYvBXxFguLZXWRSxXcQeq/WsT4t+BrPxvprW8jFniO9ZRwVHtXkPhPxrefDvxQ2i6kkkchO6KRkys6/X+nWgD6ii8TNcWbHONvTI+99KwtYvEkEkjOyj6CsTTNaN9p1uytuVDjK9vc+1O1ScXFvIH3R/WgDlfA+lXmjWd0t9qEl/JLcSybm+8EL7kH1A60muTupVUYszfw96vtJHFNJIGJ9hWffWHl3EcwZjJ6UAQRKYbT5RWr4G0ya1828C7st8gJwFX/Gs0XGH2syoo28twMHqfoO9bNv8AFfw5a2VrY2+q2clxJIsJhjPmSB2ZUClVBIO5lHI6mgD0P4YeE3+IXjOytrmNms7c/arrnv8A3T719JQRLbwpGv8Aq0G1R/cX+6PauX+E3gG08C+HI0jXM1wPMlkc8sa6qgAoooT56AJIKKI/kooAKKKKACiiigAooooAbvptD/JRQAVHUlR0AZdEfyUUUASUUJ89FADd9NoooATYKZUlR0AQ76dT9gpHTZQBHsptSU3ZQA2pKjqSgCSCvlz9qrRGtvilqDBPluIIpUP/AD0ym3ivqOCvGP2sPC/m/wBl6kAdql4HPdTt3Lj+X1oA+dLabzbdVVVUt2Pas/4keFZrjwtZt+9aK4uY0Y7zjH5V0kmjLH8yj52+6PSumuNDXXvAeyP5po3R1U9MigDgp/Akdt4ZSaSFo3hTblR/B7DpmuWjhlku93mKsK9A3CivUviHfXw8Fm10+Fftvl/IByB9a/Or4jft0+MPBvxG1bSb7RbaAWVwLZmnby5Nx6EL0waAPsu80ZdUgVZpPMj3bWQd/wAqsyfBTSLzTlm8tWZu+cN+tfM3wu+MnxP8cwPfR6TY3dnGqljFMYyCwVgenfd+hr0Cy+JXxDju47SbQ76Fpl3p5SicKMbsnn+VAHsXg/4dWfhTUVms4WeVeisC236cV6toUV7NP+8soxCsW9WJwxf/AAr5v0X4u+NNIvoLeTSdeWbuGs23GusuPGvxUNvix0K6kWTEUAu1W3Yk+zNmgD3RpplWNQvl+X91+T/Sob+6+22U1q8zyLJ95YpPLZPqRXhehQ/E7UtRNrq11oukR4YjIZskfw/LnmuP8TfEL4laP4puNOs7S1nmjRpAVz8yr3PHQ0AfVWmKr6dbwwyBY7dNqSS5cyfXNUPHfwj03x54ca3vg6MkvnrJA214pP76nr+HSvmTTv2q/GWkeIfD1nqfhmW6j8Qbjp89rcJI8gHcoG3L+Ir6Q8O+OJltI2ktZbe6YbjHJ0/nQBxfwi1e+0zWL7Qb7d52ksYSOvmLt3A/j2r0C+RvJbeVbd61zPw+0SWX4gazqm1tt05RXPJKom1fx9a6PV5PNuvLSgCgZJDK3l7SzdyOKrzxbmViRuWthFjtrRsKd69TXP3UzR3jMxwi9TQByHxt1Ka3+FnizycxyDT7iJJE+9GWbbx/Su1/4JC/sw6LafsraN4ivLPzNa1e5uZr2WQlkn2zSJC6g/MMYDn5uqLjNZN14Fk+JJXw/wCXI6atOEkKfe2h9z/mOlfaHwa+G9n8Jvhrpfh/T41js9OiWKJcc4y5b8ywoA6WBBbQbF+bam0ZqWo6dvoAdRBRRBQBJRRRQAUUUUAFFFFABRRRQBHPRRPRQAVHUlR0AZO+nVHUlADo32U6o6koAjop2ym0AFN2U6igCOieiiT56AI6KKKAI6kqOnb6AJoK5H46+FpfFHw0voLZTJcW5iuo0/iLBvnx9V6V1kb7KdyD7YxnuRQB8V3F3iOOYKW3HAI6Guo8D33kjavzCToPSj4/eDW8C+PrqBYWhs7x/tFoAPl8v29653wprDQX7BZF2/w5oA6bxJAtvNN5P+s2bVNfnH/wUt/ZZuPiJr1xrPh2Mw6+jJMkrv8AJMU+7vJ4/LNfodrOorNq8fmEruG4qvX/AArxr49eC4NbkVLiPZFu5IG8MPZOn60Act/wTL8UeD/F/wAI7iw1y2tLPWrDTIU1S2ZthjkjDIjDOMgnZ74PSvszwN8FNBtv7H1qELG1vtgCK3+tQpt5HNfmXPpWrfCnx02p6PFHcW0lwk7xvHncEcMqH+8vyr196+ivhP8At3MLgSatpt5ptxHCqhYG8xUcdwCQMUAfcvjH4T6NrVxY3hV4bgTgEhiMg7vf/ZNaHjjwFoOp+H9PhZBZtb3EflToNsjf8DbJ/SvnPV/29fDf/CL6dM+sXV1crIkkkS2km9cb8g8dfmFebfEH/goHrXiJbi10PTWuoWdBG16xGwjuMZNAH1F8UPDng3wpqej3V0NOsLaGZoBLP+5R2PTcW4D/AF496+Q/j142h1j4heJrPwzbBrjUIxaHU4n3LFEv3vLxnk9uBXL6t4o8e/GXwva2fi7Ulj8MQSebHD5Ii85/7zMdxc/XFdl8HPhjZ3y2bfZ5IYbVmbcCU+0Z/P8AWgBv7Jn7Mtj4M2eIpoWk1Ro2ijmkJL7T9fuf8BzXtGq6ebSBrjy2mfGwHHINbWiWC2loiIu2FOmKg1e4MzsnKqp38elADfD9gmmaBtXja7sD3OelUpYY4JN2GJq1qerwpA0MO5mT7wA+7Wa2pRm23NuVf+eh+7/j+lADtUuI4LCRfmVq5PVLtTahXz++fyxjsff2o8Q+JwZ2VpV2t3FYYvftkjb3G2M5H1oA9T/ZKsv7T+NEDSctZW7SyDPCEttr69XbIFb+7Xy5+w9pbXPjzVLwgb/sgDH1y+7mvqGP5Y8UAFFFFAElEFFEfyUASUUUUAFFFFABRRRQAUUUP8lAEc9FEnz0UAFR1JUdAGPTkffTaIKAJKdvptFAElR07fTaACiim76ADZUe+jDU2gApu+h32VHvoAdRTd9G+gCTfU1V6XcaAOO+PXw5b4keAZLe1jH9pWQ+02zfxA/88/pXyB/aU2jalItxC9vJE2xkcfMp9K+8vO+bcV3MvzA5xk/4V8Z/tN6INL+MOvfZx5SNcLKARkBiqt+WGFACXmpySC3m35t5RsVMd/rWf4ltF1e0RlXDf8s++ao6HqH9q+F2gRt8tq26OnQ6rMvlgf8ALv0HrQB5T8U/htcwStcaeGaNf+WeOTXC+GPDCJeSR6jHKsf90ZQfnjNfUKRC7iiaZY1Z+oyKdH8OtP1KKRprJt3Y560AeK6r4X0VtNtUsrO5aTZl3DNl5P8ACtXwX4T0i2vILgaLf6hqO35syFFB+hxXsFp4O07TDERG22PqBXR6Hp2nfu2ihZpJPvs/JFAHHaP8NNQ8apFca4sa24+7apHtRK7zSfD1vpA226qsa/dX+5WrJNhWRVVk/h56ViPqixXTQrJh19aAL9yxsIfMVRu/ulvlqCyhW5vpLqZnVNm3b/DVeaeHUbi3iX5g3Ug8VX8Vaz/Z+ktGflLfnQBn6jq6rcyOq7WVtuB/H9a5nxH4la1EkryKrN9054H4U261HbBJK8iht27rXB+LNam1Wdk48laALUXiKXVdVeNm3Rp/s/e+ldBFb7yqKqhf4skVh6BaeXHHIufl6Niulto1Qb/kPsE5oA+h/wBhq0kisNYvCv8ArJFgb149K+gN9eK/sYWP2fwHdSZb95eN074r2igB2+nVHUlAElFN306gCRPnoogooAKKKKACiiigApsj76N9NoAKKKKAG76bRRQBj0R/JTd9OoAkopu+jfQA6im76N9ABvqPfTqjoAdvqPfRvqPfQA6eo6dI++o99ADqKbvqLcaAJcNUm+q241J5496AJd/zYr5L/aLjD/FLWk3Mu6ReevSOPNfWX8ea+Sf2kAz/ABX1hl4/eL19446APOdH1CXQPEClpA0Uj7DkYGa6LTkiOourYwy7vpXC61cSSRuIcyNu+TPG4+1dF4H8SQ6pZwtNzdR/u7lR1X3+lAG0y2tvIsG5CkH3nYcn6VtWmqW8OZLeSZmm/wBYrv8ALH9K5m4RboEMpC9z61s+FrfzhtKzM0n3l2jP86AN+W9mnhXao+Zd2COas6IyhF8xZt5G52Ztq/hSCz8qBZDu3K3OB2rb0fSIZ4Ua4fzCy7dp4C/WgDOudaN1N5KHb9KdHaqkbOvzs38bDmrn2GGe62tGUT+8o+aqGtalBpClWmSOFV3FmPSgBYhBpVn9sn2M38CkgBvpXnPiHxHN4n1Ryh3W6NtyP4vpWR8Uvis2u6oNB0maL9yMy+WuWjPoPeoYtUh0DTo4YpFBVRwx+bPf8u9AEniTVIkgkit/3km7bhq5K0mW/wBR+yq3mNH9/FWtb1UFWdNqqy/f75qx4C0CS+1FpI+kn33A5P0oA3vCuj+ZMv3ztGdnatzWHXTNIaVI90iru2jrW5ovh6HS7bzvm37NuKx/EUvkiSTq277vtQB9J/sQ3Mmo/BSzuGtGs2edpJFY/Mu7sfcd69h318w/snftE6B4C8N3eh+KNSt9HELteR3V3IIYGB++C7EDPpXtvwv/AGg/APxsk8vwf428J+KJV3botK1WG8kXb975I2LHHcAEjvigDs6dvpvQyZ+XycByeApPTP1pC23bnjdQBLUi/Muah31LHJtjxQA+N9lG+m0UAO306o6dvoAdTd9G+m0AFFFFABRTd9G+gBtFFN30AYtO302igB2+pNlQ0u40ALvo302igB2+o99J5496SgAqNjtpuGpkm5qAH76j30b6j30ASb6bUG40bjQBLvo31Xw1SeYN2KALGGr5P/aKkH/C39Y9PMj/APRcdfVCXPmKzLllBGCvzbs+mK+Uf2hZ1n+LutmP5xHIiuR/CwRFZT7qwZT7g0AeV+M9KnmtnkjV/Md9wA42fSvP4fGs/h3UpLiFh9pjO2VTwJE/xr1y7tmkgU723N69BXl/xV+Hk2qRzXcHmPJ/GEG3FAHTeGPjvofiKCO1ubqG3vEG6SNjtIrrPDnxIS2uo2Qq0P8Az1BzmvkDVrN7a4K6jDtkRNvnxj5n+tafhrWdT0YGSx1yS3jX/VxyfMv40AfcGj/FqIzeX+5b/eon+J9hYXTRmRR5nUA52/lXx/p/j7x6l7m0vLG+43fMoWta1v8Ax94kfy7/AFaztRJ954bcIaAPojxd+0fp+jhlW+iRl9T1/rXl3iv45av8SLoWujofJZv3l8Yflx7Dr+lc1oXwl0uK/S51C8m1K8/iZuQPwFdRJr1lpOneXZRJH/tq2P0oAueE9Dj8K2/yNuupTve4fl3b39qjvtUkae4jjaD5c4ITc3zfe/8ArVTs9RuL4x+TAY1/vE8V0XhXwI9zL5hjZpD1zQBT0HQLjWbvMgbZ/cIr2Dwh4Oj0LT42kVY1X72OpqbwT4Ej0eESSIWk7gjpXTaharLaf6QPLHtQBi3mGVWP3G/h7iuL8Wbl3f8APRv0ruL7CpJNjp0FcT4wXCSN/wAtG+77UAeXz6j5eqvHGdquHiOzCNz7qAP/AB2vzz/4KEfB/T/2WPizpXxA8A6trHhLWtbuJZbmPTb+W0EdyN3zx+Wy7Q+07xj58jpX6DazE2n6wZNq7QMc/wB7v+Vfk/8A8FJv2iD8bv2grmxt7qOXR/DYFjbGM8SsNu6T8fmx9aAPsj9hn/g5Y+JXws8aaHpnxoktfG/gaK3a3uNQgtEi1uz2/wCrcSblSZvXft/Gv1w/Zb/4KefAn9si8tdP8A/ELRL7xBfR+ZHod7J9l1NPbyX5c/8AXMtX8ns1/wCUm7Ks/diM7vqKPDHiu88JapBfafeXen3tu/mW08Ehjktz7EY/QLQB/Z6UPnMoy23O7aCSuOmV+9z2OMU8HgZ+Xc20ZByfw61+Bf7Ef/BzZ8Svgr4M0fw78SvDtj8RNN02MWsWpfaja6zNAv3VkYDypD6koK/SL9nn/gv7+zX8c9OtzfeMJPh/q1wvz2Xii1kso0PtdKHi/wDH6APtbPybqKy/C3irTfHHh2z1rRdSsdW0XUolmtL2znWeG6RujIy5DA+1ahO3d6IMsTwF9vr9KACiiigAooooAdsqPfSbjSUAFFFN30AG+m0UUAYG40bjTN9G+gB+40bjSJ89FAC7jRuNM30b6ADfTfOpu+o99AD9xqN2KU+oJ5x70AJ51M3GkqFty96AJMNQ25e9QiXJA53YyVAztPocd6zvGHjfR/Anh+41bXNY0vRdJtAzT3t/dJb28IX+87EAE9gefagDUE+QSMsFGWwPuexHXP4V57+0x+1h4D/ZD8AXHibx94hstFs4YzJFbs4a9vecBYIAd8hI5+UEAdSK+cP2iP8AgvB+z58GNGvI9B8VW/xI8URt5dtpego80Zl9ZbkARhfcMT7V+G/7dP7YPiz9tL406h4w8RXzSXd9iGC2jc/ZtLtwNixwr1zt+8QV3nrigD7I+Ln/AAcu/HDxbqev3nhHSPB3hTw5DNK2nNLp/wDaWrCE/cDSTMYNw74iI96+sP2Tda13Wf2fvCN94m1CfWPEGs6f/a+pXk/DyXFy73DjHtJMMewr8MXu2j8Ptbx4ZFj4/wBuv26/ZU8Qf2t8EPBd0rNItxo1q6j1KxJnHt8poA9ljj86L95/F932qW98Ox38C7oi21dzEHCv9aNNlS4iXdzj0rW09jGu7Lfd27T0oA8Z8c/Ar+2NQZoYtsbdhy1ec658BL7S3b7PA00K9t3NfWF1pUV/D5lvu8z0Bqvb+Hob7cjLHGzdAVoA+UdN+HF9p90u2K4g3Jt+dS1dLZeDdVuY1X98yr/Fmvp6P4a2zwq0sbSMvZWzVtPhRYpBym9v7vRaAPnHSPAl68YWZmjWT7zR5Vq6Twz8JgPLj8qaaOP/AFhI6V7tY/DqxjjVY4ZF29cAGtiPw1bQW+yFQMf3f4/rQB5j4W+FqptVl3BeqCu30HwxBaoPJtw83fHQfWt220nbPtUeXH/eH3qvQweRGVhjZFf7zY+b8KAK1hb/AGRSrfPI/wB49vwpLqE3kfCs49D1rTS2Dw7v4veoL2JRHu+Z2/IUAcvf27MjLt4bpXI+JrcMGfazOq7iADXc38WwNkt8oZmwM4A6mvHv2qv2hPC/7NHwivPFvi7UPstvGBDDGrZmvpj0ihXje3vkKO5FAHyb/wAFSv2lo/2fPghfWdhqFvb+J/EUq2dihb544FO2eY45HzfKCM5PtzX5A3lyzTvJ5zSSSF3ZjySxrvv2qP2lNZ/ai+Mmo+KNWEcLXTKtvAjbo7S3QYigUH+FF+TPVh8x54rzWe78lsKtADbqYP8AL82fWoxP5zqG/h606ZP3fVd3pUNuN8maANGO7KxqrdP7wPK/SrP9pzQ3DNa3nk4+45B3D/vnB/8AHqx7q72tipIbmTdjcv5UAfVX/BPT/gq/8VP+CfPxGsbzRNYuNU8HtKTqvhm4kK6ffI/3ig58qRf4XTDHuwr93vgP/wAHAP7Mfxm0TTZrnxtJ4O1O+g8yXTtZ0+fZZy/3fMRXjJ/4FX8vsk2V+bO7+6Pu0JM1z8vmBR1OCxJP9772M/8AAaAP7Pfh98S/DvxZ8E2PiTwvr2j+IPD+pDdbajYXaT20o9nU4J/2fve1ba/MP4vxU4/A4wfwr+U//gnX/wAFWvix/wAE6PE99/wh+rR3mgasc3mjaoJLmykb/nqBvDrJ7qy1+tn7J/8Awc9fDHx/HZ2fxU0HVfA95N9/VtPVr/TpPqo/eR/8BRqAP1CaTa2Kjw1eF/DD/gpz+z78bJ7dfDPxd8E309wNwt5b8Wc6/VJwjfpXt2kaxZ+INPW80+7tb+zckLcW0yzRsR2BUn8+lAFiihxsHP8As4989BTS+3/OP50AG+m0UUAFFFN30Ac3vp1R0vnj3oAljfZTqq4an7jQA+m76jw1G+gAd9lNpsj76jbcvegB7PsXNQTSCkkfdF7BtrH+79ah2vM8aquWkPygck+4x1H0zQAolz/F+FR3EoU43ocDnDA/hXyn+1F/wWe/Z8/ZN8W3nhzxD4tuNb8UaZN9nvtN0Wye8ls5B1V2GEyP9ljXjvjn/g5E+B+jfD3UNR0PRfG+qavCmbKyuLIW8U0nuwYnH4UAfWH7Y37bnw//AGFPhPceKvHmsRWK7UTTtNikzd6nct0jjjU7m924Qd2Ffzv/ALeH/BTP4mft/wDji8k8T61dL4XS5aXTfD6Y/s+yQfc/djAL+rMW/GuC/bO/bW8aftrfGO58YeNNSW4upHdbSxgyllpcB+7BBH1Vf73OX9q8stj9nXcJOaANqyujZQM3+sMabyAdys3uGBH6UyaVZbHcG2v7VBE5ttM/2pm+f6e1VrO8ZjtLH8qALmlXW20jXq0MeOe59K/Wn/gl/wDGmw+If7L+g6Gl9G2teF42tJogf3iw7vlb6beK/IsH7NqZAZWjkO8bf73+FeyfsbftPXn7MXxbtdSt5NlhL/o15CRlZI/c+tAH7heFdTwhWUlT7122lhbuJfK/ebvQGvE/gl8X9F+KvhXT9R0m9guFu08xSmTkf41634f1VXVFVmLL1+fbigDq1s4zJuYH8OKnsrRZJ9skf/Al60yyHmjPr0z3rQtlZF3YGaANDSNMjf8A1c5if25FbtvoEgTDTKawdNk2Sf63b9RXQ2E0Zi3/AHl9moAq/wBinbl5tvsnWnQW8dsuUDD/AHqtSmM3O/P+FSCFZkw2KAKFsWuJvm/lV9LFli+8KtQQFU4Zd30okJiVlKtuQ4YY+ZW/u465+goAozxmOXH8NYuq6g0UxhTCyL13HaB+J4qn8S/ibofws0CbWPEWs2ei6Va8TXV5KII4j6EtjmvzL/bw/wCC89r4fnvPDvwdks7+aH7/AIgmh86FP+uCMRv/AOBBaAPrT9s39v3wD+xd4WvrjWNUt9U8SFd9p4fhmxPcF+jEcBYx33EN/s1+IP7YX7cnjj9s/wCJbax4nvi1rAvl6fp8A8u302I/8s4l6A/3n6v3xXnvxM+J2tfFnxnqOv69qFxqurarO891dTnc85/hyPQeg4rmbx/LG5h5jenSgCXYttDtNRBPN+ft6U6NGvH3v8q+h60P9/5fu0AQyR7zuz81Nf8Acf8A1qkzUbHPWgCrdOWmb/ZqxbuXfd/D61Vn+4395qsWvyQbf4aALUkgdsU2zdPN/iqC9fypal0VPNk7UAa3mIbXyzu3eoot9b1K0O2Nmmh/uEkMP+BAioWnVGxmoxJt+78v0NAGuniK6jizHJLF83ZmYgf7xbd+te0/sZf8FJPip+w98RYfEHgvxJeL+6aC5sb13ubC9jPRZYGfa3+8pU14H5q42bmzRHGUbFAH9Ln7GH/BwR8B/wBpD4Z6XceMPFWnfDvxhJbqNVsL+N2sVmHeG4UMhX/eKn2r7U+HvxF8P/F/wvDrnhXXNI8SaLcLuS+0m8jv4W/FTX8bcWoNBKsoby2b+Mnc3/fWN3617N+zD+278Vv2UPG0OvfD3xVq2h3kLfN5BElvMP8AppBJujk/4GGoA/rW85QgbK8/7Q2j6tnb+tPKkAf7Qyv+17CvwB8N/wDB0D8f9Hs7NtUtPAepSQ/8fEkukzW8l1/vGGVAPwWv0/8A+CZ3/BYP4e/8FC/C1npkd1b+HfifHE02oeGpyw83b/y0tXYbZV9gd3+zQB9eb6bRuAZlJ27W2nPGD6H0OOcHnHah/koA5XDU6oNxpPOoAl3Gjcagw1GGoAn3Go3YpTGyvcUks4dsLuba20kDgUALhqbcT7UkbPEJxITx5Z9D7+3Wsfx1470f4Y+E73XvEWradoei6au+6vr65jt7eAf7TuQB+dfk7/wUp/4OPP8AhGdck8Jfs83FhdS2x2T+L7iDz4Y/9i0icjB/6avQB+h37V37f/wq/Yu0qS58eeK7Kx1JFwmi2zC51K5b/r3U71/4GFr8hv2xP+Dgf4sfGi41rS/AdxZ/DjwpePiOW0jEmuTR/wDTW5PAP+4or89vG3xT8QfG34k6h4m8Vapda54g1iTzb6/vZS807e5GD+orP1Cfc7f7XQZ5oA17jUpte1i6vLy6klluJnnmndyZJ2f7zNyMn0ya57xb4mfWmEMbbrWP/Vo23K/jtpuq6gIIVVGIH8Q7msNp2kfJVV/3aAHQ3JnfLfyq8sAYKv8AerPs4zuxWlYcTqG/h60AXNTPlxquG2r1rLjnzL8vFaV/dYj2N92slj+8Vl/i6UAasQ+2afH8qpN7VEtxvIwirIvyhDzub3pbaT51kX+HtUd0nmT+dD80m/dgUAe+fskftx65+zh4gitpXmvPD7DElru5iH+xz/PFfp7+zt+2/wCHPjJZ2s2n6ta3txOu6SHO2Vf+A9a/EGPMi4GX9u9a3hHx5q/gPWYdQ0m8uLS8hb/XQyFZHHuaAP6S/hx48tPEkcG24jk43R4YHP4DmvQbSa3miO11zt3Yb5f54r8AvhV/wV9+LXw0jt4mvNK1a3t12hL60DSf99rg/pX0L8Pv+DhvWrO3ji1zwTpkyqu1msrt42P/AH0poA/X428fmfN5S/8AAxRAiXEXlxkbfRX5r8y9H/4OH/C8sWLzwbq0Lesc8bfzYVJqP/Bxf4ZsIv8AQvBWrvJ6zXMaj9CaAP1K0ycMVW6jaONv4mRlx+YzV+fULeKXy9pWTtGUIdvouM1+MXj7/g5A8VXErR+GPBOg6cv8Mt7PJK4/CPyx+teG/FD/AILifHr4k2VxZx+I7DQLeX7i6XpsMIT6ZDN/49QB+7XxY/aU8F/A/TJLzxb4l0Xw9bxHaxvblY2/75+9+lfBP7Zn/Bwf4V8CafNpfwthbxNqnT+0Jo2j02D/AGlT77N9cV+Pvjv4t+I/idrEl94g1i+1S6mfc73ErSH/AMeJ/lXNXH749Fy3ViTj8s0Ae2/tT/t6fEv9r7Vmbxjr015YxyebFYwxCG0gb/pmmWC/8C3V4vOWI5bLdsjIH4UhIVmBcqrdM9aQv538LL9aAI/MWMfKd3tTvK+TzHGW9BTpALZ9yoGb1HSo5J3aTdxQAT3XmPxwtV8NRvp1ABvbbmqtw5x8tWv4MVDIZGH3h+VAFWep4X/dVFMnzYqzCg8mgClqlztl/iq5oe5LFZP73esvWn2y1rWn7rR44/4aAJItrS85pdxqvG5V81PuGOv4UASxtHFDubr7VJFJNNLlVyvr2qvbQAjdNnb/AHR96rn2iRYvK+WOL1HWgCcmGyRd7ebMvVB92nnxNOsflxsIfZetUJJFYYRd/wDtfxU7yF8zfzu+lAFsa9ecjzJdr/e71veCvHup+BNat9S0u8vrHUrV1ktbu1lZZIm/iP3hz7gj6VzXm/7VDXjRFQrMu3rigD9uv+CB3/BYHxf8TfjLZ/CH4oeJINY03VdPli8KXt8V+1212j4WyMpIyJIfuFt7FhtLA8V+xk2dzLtYMuOCME8ZI/AcnP61/Gn4Z8R3ug6nDf2Nw9rqFm4mtriI+XJFIvKEMOVK+o53fP14r+lL/gjL/wAFQ9L/AG7f2fLHSdc1uG6+K/hm12axaTART6lGPlhvo+dr70IVwp+VmGcD5qAPqPcaXfTaKAF3Gk8zrtO4qMkKM49qKhvnaKWBVJVWfkDgGgCp4t8a6T8P/DdxrOvalY6PpNqds15ezLbwxn0LPgbvbr7V8P8A7Z3/AAX8+DnwE8FX6+A9Wt/iR4pt38qGC3ilh02M/wB6S4ZQu33XdXjn/ByZ4k1GG38HaKt/ero9xb/aJbATsLWST++0edpb3IzX4r+IJWbTrG6LMblouZc/Of8AgXWgD3z9uD/gqZ8XP265jbeM/EmPD1vN59voNhEsOmwf7Ajwdy/7+6vme/uC/Gfl3ZAxwB/8T/sdPepIh/ogqneHmgDR8PSfadRwf/10++uilwx/jX8qo+HDjVIvpUt4f9IkoArXb+YPMyd1VvPHvTgeTTKALFr8r5rQsvmn3D5hVOGri/J04+lAEmoHfWVKGi25/h9K0bw81ny0AWrW52Rd6lGc7kO1vbpUEP8AqafYmgCz5EUzZV2jk/u1C0bQfdVmprn9zu7+tT2rE55NAEDyZXcz/kKarY+75jfRqtTIvk/dH5Vnyjb04+lAEwuJP4sN9RTZJJd2Dg/hVfdU4P72gBZhJ53X/wAdNN8rD5bK/WkWZjJ95vzpIhu68/WgCeNVmXKfN9Kb5Mnl4/h9O9X7dAkPygL9BTLjiUUAQWtuu3O7zPrUhk2/eKn/AHadOdifL8v0rNjNAEtzesBtX7vvUHnVJUdADtlOb5WxRRN/rqAGs+1c02ib/U0UAVZJFabrVqM7bfdVXb+86Va/5cqAMfV/9J1SGNeTu2sPWtiX5UVey1j6fz40j+lbE9AEajc2O/pVqGJU+ZlYyf3R1qGx5uqufxbv4vWgB0gUfvZPyqmJmvbjbhvL/WjVm/d1PpvAoAkkKwfdIX6VBc3jbvlZfrVe9NQZza0AWkuS9Sxbml5qrBVyH/XUAXLF2i6mvbP2M/2r/FH7H/xz0bxx4Pv4bXVtLeVgs8ImhuY5U2yQSqcbo3B2tjbkKrYB4rw+E1t6EcPHQB//2Q=='
    }
}