// @ts-ignore
import Sodium from 'react-native-sodium-boa'
import * as Base64 from 'base64-js';

export class BOASodiumRN {
    public crypto_core_ed25519_BYTES: number = 32;
    public crypto_core_ed25519_UNIFORMBYTES: number = 32;
    public crypto_core_ed25519_SCALARBYTES: number = 32;
    public crypto_core_ed25519_NONREDUCEDSCALARBYTES: number = 64;
    public crypto_aead_xchacha20poly1305_ietf_KEYBYTES: number = 32;
    public crypto_aead_xchacha20poly1305_ietf_NPUBBYTES: number = 24;

    public init(): Promise<void> {
        return new Promise<void>((resolve) => {
            resolve();
        });
    }

    public crypto_core_ed25519_random(): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            Sodium.crypto_core_ed25519_random()
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_from_uniform(r: Uint8Array): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_r = Base64.fromByteArray(r);
            Sodium.crypto_core_ed25519_from_uniform(in_r)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_add(
        p: Uint8Array,
        q: Uint8Array
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_p = Base64.fromByteArray(p);
            let in_q = Base64.fromByteArray(q);
            Sodium.crypto_core_ed25519_add(in_p, in_q)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_sub(
        p: Uint8Array,
        q: Uint8Array
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_p = Base64.fromByteArray(p);
            let in_q = Base64.fromByteArray(q);
            Sodium.crypto_core_ed25519_sub(in_p, in_q)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_is_valid_point(p: Uint8Array): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let in_p = Base64.fromByteArray(p);
            Sodium.crypto_core_ed25519_is_valid_point(in_p)
                .then((res: number) => {
                    resolve(res !== 0);
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_scalar_random(): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            Sodium.crypto_core_ed25519_scalar_random()
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_scalar_add(
        x: Uint8Array,
        y: Uint8Array
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_x = Base64.fromByteArray(x);
            let in_y = Base64.fromByteArray(y);
            Sodium.crypto_core_ed25519_scalar_add(in_x, in_y)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_scalar_sub(
        x: Uint8Array,
        y: Uint8Array
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_x = Base64.fromByteArray(x);
            let in_y = Base64.fromByteArray(y);
            Sodium.crypto_core_ed25519_scalar_sub(in_x, in_y)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_scalar_negate(s: Uint8Array): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_s = Base64.fromByteArray(s);
            Sodium.crypto_core_ed25519_scalar_negate(in_s)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_scalar_complement(
        s: Uint8Array
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_s = Base64.fromByteArray(s);
            Sodium.crypto_core_ed25519_scalar_complement(in_s)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_scalar_mul(
        x: Uint8Array,
        y: Uint8Array
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_x = Base64.fromByteArray(x);
            let in_y = Base64.fromByteArray(y);
            Sodium.crypto_core_ed25519_scalar_mul(in_x, in_y)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_scalar_invert(s: Uint8Array): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_s = Base64.fromByteArray(s);
            Sodium.crypto_core_ed25519_scalar_invert(in_s)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_core_ed25519_scalar_reduce(s: Uint8Array): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_s = Base64.fromByteArray(s);
            Sodium.crypto_core_ed25519_scalar_reduce(in_s)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_scalarmult_ed25519(
        n: Uint8Array,
        p: Uint8Array
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_n = Base64.fromByteArray(n);
            let in_p = Base64.fromByteArray(p);
            Sodium.crypto_scalarmult_ed25519(in_n, in_p)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_scalarmult_ed25519_base(n: Uint8Array): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_n = Base64.fromByteArray(n);
            Sodium.crypto_scalarmult_ed25519_base(in_n)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_scalarmult_ed25519_base_noclamp(
        n: Uint8Array
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_n = Base64.fromByteArray(n);
            Sodium.crypto_scalarmult_ed25519_base_noclamp(in_n)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_scalarmult_ed25519_noclamp(
        n: Uint8Array,
        p: Uint8Array
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_n = Base64.fromByteArray(n);
            let in_p = Base64.fromByteArray(p);
            Sodium.crypto_scalarmult_ed25519_noclamp(in_n, in_p)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public randombytes_buf(n: number): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            Sodium.randombytes_buf(n)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_generichash(
        hash_length: number,
        message: Uint8Array,
        key?: Uint8Array
    ): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            let in_length = hash_length.toString();
            let in_message = Base64.fromByteArray(message);
            let in_key = key !== undefined ? Base64.fromByteArray(key) : '';
            Sodium.crypto_generichash(in_length, in_message, in_key)
                .then((res: string) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_aead_chacha20poly1305_ietf_keygen(): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            Sodium.crypto_aead_chacha20poly1305_ietf_keygen()
                .then((res: any) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_aead_xchacha20poly1305_ietf_encrypt(
        message: Uint8Array,
        additional_data: Uint8Array | null,
        secret_nonce: Uint8Array | null,
        public_nonce: Uint8Array,
        key: Uint8Array
    ): Promise<Uint8Array> {
        let in_message_chunk = Base64.fromByteArray(message);
        let in_additional_data =
            additional_data !== null
                ? Base64.fromByteArray(additional_data)
                : '';
        let in_secret_nonce =
            secret_nonce !== null ? Base64.fromByteArray(secret_nonce) : '';
        let in_public_nonce = Base64.fromByteArray(public_nonce);
        let in_key = Base64.fromByteArray(key);

        return new Promise<Uint8Array>((resolve, reject) => {
            Sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(
                in_message_chunk,
                in_additional_data,
                in_secret_nonce,
                in_public_nonce,
                in_key
            )
                .then((res: any) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }

    public crypto_aead_xchacha20poly1305_ietf_decrypt(
        secret_nonce: Uint8Array | null,
        ciphertext: Uint8Array,
        additional_data: Uint8Array | null,
        public_nonce: Uint8Array,
        key: Uint8Array
    ): Promise<Uint8Array> {
        let in_secret_nonce =
            secret_nonce !== null ? Base64.fromByteArray(secret_nonce) : '';
        let in_ciphertext = Base64.fromByteArray(ciphertext);
        let in_additional_data =
            additional_data !== null
                ? Base64.fromByteArray(additional_data)
                : '';
        let in_public_nonce = Base64.fromByteArray(public_nonce);
        let in_key = Base64.fromByteArray(key);

        return new Promise<Uint8Array>((resolve, reject) => {
            Sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(
                in_secret_nonce,
                in_ciphertext,
                in_additional_data,
                in_public_nonce,
                in_key
            )
                .then((res: any) => {
                    resolve(Base64.toByteArray(res));
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    }
}
