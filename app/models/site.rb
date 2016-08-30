class Site < ActiveRecord::Base
	has_many :pages
	belongs_to :user

	validates :name, :identifier, :user_id, presence: true
	after_initialize :ensure_identifier


	def ensure_identifier
		self.identifier ||= Site.generateUniqueIdentifier(name)
	end

	def self.nouns
		%w(camp vase fall motion grandmother cap observation rule insect size gate beginner lumber ducks hammer expansion sleet pen transport throat move pear rain desk pizzas suit bee magic word bulb tramp key box lake plant heat humor pleasure haircut swing surprise rod tub join jail look memory appliance screw afternoon ghost wall statement oil holiday wrist fork sleep morning bikes rake vein oven potato pump desire glass mom battle request finger bit tree grandfather force shape berry beef office star lace pies ink peace kick crime drop guitar partner head cats sort tendency zinc mailbox laugh aunt payment copper hook)
	end

	def self.adjs
		%w(pleasant idiotic nauseating freezing vagabond chivalrous hanging cautious futuristic needy stereotyped vulgar rigid female deafening infamous ratty hulking private weak aback same agonizing curvy erect callous lovely tense apathetic proud towering future graceful hard foolish impolite chubby equable disturbed utopian luxuriant red cute detailed omniscient savory grieving labored lazy hollow melodic messy watery grandiose rambunctious new fearless ruddy abaft wretched simplistic obnoxious frantic judicious finicky complete incredible obsequious dirty ordinary funny stale deranged cooperative joyous distinct drunk tremendous evanescent flagrant belligerent open ajar wooden absent festive unusual medical expensive harsh incandescent educated elderly faded dangerous royal rich crooked grumpy daily)
	end

	def self.generateUniqueIdentifier(name)
		identifier = name.downcase.gsub(/[^0-9a-z ]/i, '').gsub(" ", "-");
		while (Site.find_by_identifier(identifier))
			identifier = "#{adjs.sample}-#{nouns.sample}"
		end
		identifier
	end
end
