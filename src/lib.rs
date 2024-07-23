use rustrict::CensorStr;
use strsim::levenshtein;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn is_similar(quote: &str, quotes: Vec<String>, threshold: usize) -> bool {
    quotes.iter().any(|q| levenshtein(quote, q) <= threshold)
}

#[wasm_bindgen]
pub fn has_bad_word(quote: &str) -> bool {
    quote.is_inappropriate()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let quotes = vec![
            "Your time is limited, so don't waste it living someone else's life.".into(),
            "The people who are crazy enough to think they can change the world are the ones who do.".into(),
            "Stay hungry. Stay foolish.".into(),
            "The only limit to our realization of tomorrow is our doubts of today.".into(),
            "The purpose of our lives is to be happy.".into(),
            "Life is what happens when you're busy making other plans.".into(),
        ];
        let quote = "Life is about what happennig when youre busy making other plans";

        let result = is_similar(quote, quotes, 27);

        assert_eq!(result, true);

        assert!(has_bad_word("fxck off lil nigg"));
        assert!("fxck off lil nigg".is_inappropriate());
    }
}
